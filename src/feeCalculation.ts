import {FetchRequest, JsonRpcProvider, ethers, formatEther, formatUnits} from 'ethers'
import {chainData, idToName, maxRetries, priceStorage} from './constants'
import axios, {AxiosError} from 'axios'
import {LzMessages} from './types'
import {defaultSleep, getRandomElementFromArray} from './helpers'
import {HttpsProxyAgent} from 'https-proxy-agent'

async function getCurrencyPrice(currency: string, proxies: string[], retryCount = 0) {
    if (retryCount >= maxRetries) {
        return 0
    }
    // console.log(priceStorage)
    if (priceStorage[currency] !== undefined) {
        // console.log(typeof priceStorage[currency], priceStorage[currency])
        return priceStorage[currency]
    }
    try {
        let body: any
        if (proxies.length > 0) {
            let proxy = getRandomElementFromArray(proxies)
            let resp = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD`, {
                httpAgent: new HttpsProxyAgent('http://' + proxy),
                httpsAgent: new HttpsProxyAgent('http://' + proxy)
            })
            body = resp.data
        } else {
            let resp = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD`)
            body = resp.data
        }
        // console.log(body)
        priceStorage[currency] = body.USD
        return body.USD
    } catch (e: any) {
        console.log(e?.message)
        await defaultSleep(5, false)
        return getCurrencyPrice(currency, proxies, retryCount++)
    }
}
async function getHashes(address: string, retryCount = 0) {
    if (retryCount >= maxRetries) {
        return []
    }
    try {
        let resp = await axios.get(
            `https://layerzeroscan.com/api/trpc/messages.list?input=%7B%22filters%22%3A%7B%22address%22%3A%22${address.toLowerCase()}%22%2C%22stage%22%3A%22mainnet%22%2C%22created%22%3A%7B%7D%7D%7D`,
            {
                headers: {
                    accept: '*/*',
                    'accept-language': 'en-US,en;q=0.9,ru;q=0.8,bg;q=0.7',
                    baggage:
                        'sentry-environment=vercel-production,sentry-release=8b2b3e1a5f4040e5282f0c75f86e8efb01d3fd33,sentry-public_key=7ea9fec73d6d676df2ec73f61f6d88f0,sentry-trace_id=9120fe8b7ed94428851697ab60657409',
                    'content-type': 'application/json',
                    'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'sentry-trace': '9120fe8b7ed94428851697ab60657409-b26417f0ca88871e-1',
                    cookie: '_ga=GA1.1.520004272.1700156268; _clck=cbqpar|2|fgr|0|1415; _clsk=1fu326x|1700157520972|18|1|t.clarity.ms/collect; _ga_1ZKFRJ8ERQ=GS1.1.1700156267.1.1.1700157521.0.0.0; _ga_3LWZVPQJTS=GS1.1.1700156268.1.1.1700157521.0.0.0',
                    Referer: `https://layerzeroscan.com/address/${address}`,
                    'Referrer-Policy': 'strict-origin-when-cross-origin'
                }
            }
        )
        let body: LzMessages = resp.data
        let hashes: {srcChainId: number; srcTxHash: string}[] = []
        for (let message of body.result.data.messages) {
            hashes.push({
                srcChainId: message.srcChainId,
                srcTxHash: message.srcTxHash
            })
        }
        return hashes
    } catch (e: any) {
        if (e instanceof AxiosError) {
            console.log(e.response?.data.message)
        }
        return getHashes(address, retryCount++)
    }
}
async function getFeeData(srcChainId: number, hash: string, proxies: string[], retryCount = 0) {
    try {
        let rpc = getRandomElementFromArray(chainData[idToName[srcChainId]].rpc)
        let proxy = getRandomElementFromArray(proxies)
        // console.log(rpc)
        let srcProvider: JsonRpcProvider
        if (proxies.length == 0) {
            srcProvider = new JsonRpcProvider(rpc, chainData[idToName[srcChainId]].chainId, {staticNetwork: true})
        } else {
            const prov = new FetchRequest(rpc)
            prov.getUrlFunc = FetchRequest.createGetUrlFunc({
                httpAgent: new HttpsProxyAgent('http://' + proxy),
                httpsAgent: new HttpsProxyAgent('http://' + proxy)
            })
            srcProvider = new JsonRpcProvider(prov, chainData[idToName[srcChainId]].chainId, {staticNetwork: true})
        }
        if (retryCount >= maxRetries) {
            return 0n
        }
        const lzFeeTopic = '0xdf21c415b78ed2552cc9971249e32a053abce6087a0ae0fbf3f78db5174a3493'
        const logs = await srcProvider.getTransactionReceipt(hash)
        if (logs == null) {
            await defaultSleep(Math.random() * 5, false)
            return getFeeData(srcChainId, hash, proxies, retryCount++)
        }
        for (let log of logs.logs) {
            if (log.topics[0].toLowerCase() == lzFeeTopic) {
                return BigInt(log.data)
            }
        }
        return 0n
    } catch (e: any) {
        await defaultSleep(5, false)
        return getFeeData(srcChainId, hash, proxies, retryCount++)
    }
}
async function getTxFee(hash: {srcChainId: number; srcTxHash: string}, proxies: string[]) {
    let srcFee = 0
    if (chainData[idToName[hash.srcChainId]]?.rpc) {
        let fee = await getFeeData(hash.srcChainId, hash.srcTxHash, proxies)
        srcFee = parseFloat(formatEther(fee)) * (await getCurrencyPrice(chainData[idToName[hash.srcChainId]].currency, proxies))
        srcFee = parseFloat(srcFee.toFixed(4))
    }
    // console.log(chainData[idToName[hash.srcChainId]].explorer + '/transaction/' + hash.srcTxHash)
    console.log(idToName[hash.srcChainId], srcFee)
    return {chainId: hash.srcChainId, fee: srcFee}
}
async function getFees(index: number, address: string, proxies: string[]) {
    let hashes = await getHashes(address)
    let promises = []
    for (let hash of hashes) {
        promises.push(getTxFee(hash, proxies))
        await defaultSleep(0.25, false)
    }
    let values = await Promise.all(promises)
    type Sum = {index: number; address: string; [key: string]: any}
    let sum: Sum = {index: index, address: address}
    for (let val of values) {
        sum[idToName[val.chainId]] = sum[idToName[val.chainId]] == undefined ? val.fee : sum[idToName[val.chainId]] + val.fee
    }
    return sum
}

export {getCurrencyPrice, getFees}
