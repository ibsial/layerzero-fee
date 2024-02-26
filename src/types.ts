export declare type ChainData = {
    id: number
    chainId: number
    UltraLightNode: string[]
    explorer: string
    rpc: string[]
    currency: string
}
export declare type LzMessages = {
    result: {
        data: {
            count: number
            messages: Message[]
        }
    }
}
export declare type Message = {
    id: string
    dstChainKey: string
    dstUaAddress: string
    dstChainId: number
    dstTxHash: string
    srcUaAddress: string
    srcChainKey: string
    srcBlockHash: string
    srcChainId: number
    srcTxHash: string
    from: string
    srcUaNonce: number
    created: number
    updated: number
    status: string
    mainStatus: string
    dstTxError: any
    srcUaProtocol: {
        id: string
        name: string
    }
    dstUaProtocol: {
        id: string
        name: string
    }
}
export declare type Chain =
    | 'Ethereum'
    | 'BSC'
    | 'Avalanche'
    | 'Polygon'
    | 'Arbitrum'
    | 'Optimism'
    | 'Fantom'
    | 'DFK'
    | 'Harmony'
    // | 'Dexalot'
    | 'Celo'
    // | 'Moonbeam'
    // | 'Fuse'
    | 'Gnosis'
    // | 'Klaytn'
    | 'Core'
    // | 'OKX'
    | 'Zksync'
    | 'ZKEVM'
    // | 'Canto'
    // | 'Moonreaver'
    // | 'Tenet'
    | 'ArbitrumNova'
    // | 'Meter'
    // | 'Kava'
    | 'Mantle'
    | 'Metis'
    | 'Base'
    | 'Linea'
    | 'Zora'
    // | 'Viction'
    // | 'Loot'
    // | 'Beam'
    // | 'Telos'
    | 'Opbnb'
    // | 'Astar'
    // | 'Aurora'
    // | 'Conflux'
    // | 'Orderly'
    | 'Scroll'
    | 'Horizen'
    // | 'XPLA'
    | 'Manta'
// | 'PGN'
// | 'ShimmerEVM'
// | 'InjectiveEVM'
