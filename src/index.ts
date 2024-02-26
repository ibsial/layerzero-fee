import {chainData} from './constants'
import {getCurrencyPrice, getFees} from './feeCalculation'
import {appendToFile, defaultSleep, importData, workInProgress, writeToFile} from './helpers'

export let proxies: string[] = []
;(async function main() {
    workInProgress.run()
    let addresses = await importData()
    proxies = await importData('./proxies.txt')
    if (proxies[0] == 'login:pass@ip:port') {
        proxies = []
    }
    for (let chain in chainData) {
        await getCurrencyPrice(chainData[chain].currency, proxies)
    }
    let promises = []
    for (let i = 0; i < addresses.length; i++) {
        promises.push(getFees(i, addresses[i], proxies))
        // await defaultSleep(5)
    }
    let res = await Promise.all(promises)
    console.log('got all')
    let header = '#;wallet;'
    for (let key in chainData) {
        header += `${key};`
    }
    header += 'TOTAL'
    await writeToFile('./results.csv', header)
    const getPasta = (res: {index: number; address: string} & {[key: string]: number}) => {
        let pasta = `${res.index + 1};${res.address};`
        let total = 0
        for (let key in chainData) {
            // console.log(res[key])
            pasta += res[key] == undefined ? '0;' : res[key].toFixed(3).replace('.', ',') + ';'
            total += res[key] ?? 0
        }
        pasta += total.toFixed(3).replace('.', ',')
        return pasta
    }
    let pastas = res.map((r) => getPasta(r))
    for (let a of pastas) {
        await appendToFile('./results.csv', a)
    }
    workInProgress.stop()
    console.log('data stored into *results.csv* file')
    return
})()
