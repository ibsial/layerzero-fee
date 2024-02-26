import {ChainData} from './types'

export const maxRetries = 5
export const chainData: {[key: string]: ChainData} = {
    Ethereum: {
        id: 101,
        chainId: 1,
        UltraLightNode: ['0x4D73AdB72bC3DD368966edD0f0b2148401A178E2'],
        explorer: 'https://etherscan.io/',
        rpc: [
            'https://1rpc.io/eth',
            'https://eth.drpc.org',
            'https://rpc.ankr.com/eth',
            'https://rpc.eth.gateway.fm',
            'https://ethereum-rpc.publicnode.com'
        ],
        currency: 'ETH'
    },
    BSC: {
        id: 102,
        chainId: 56,
        UltraLightNode: ['0x4D73AdB72bC3DD368966edD0f0b2148401A178E2'],
        explorer: 'https://bscscan.com/',
        rpc: [
            'https://bsc-dataseed.bnbchain.org',
            'https://bsc-dataseed3.defibit.io',
            'https://bsc-dataseed3.bnbchain.org',
            'https://bsc-dataseed4.bnbchain.org',
            'https://rpc.ankr.com/bsc',
            'https://bsc-rpc.publicnode.com',
            'https://bsc.drpc.org',
            'https://bscrpc.com'
        ],
        currency: 'BNB'
    },
    Avalanche: {
        id: 106,
        chainId: 43114,
        UltraLightNode: ['0x4D73AdB72bC3DD368966edD0f0b2148401A178E2'],
        explorer: 'https://snowtrace.io/',
        rpc: [
            'https://avalanche.public-rpc.com',
            'https://1rpc.io/avax/c',
            'https://avalanche.drpc.org',
            'https://rpc.ankr.com/avalanche',
            'https://api.avax.network/ext/bc/C/rpc',
            'https://avalanche-c-chain-rpc.publicnode.com'
            // 'https://endpoints.omniatech.io/v1/avax/mainnet/public'
        ],
        currency: 'AVAX'
    },
    Polygon: {
        id: 109,
        chainId: 137,
        UltraLightNode: ['0x4D73AdB72bC3DD368966edD0f0b2148401A178E2'],
        explorer: 'https://polygonscan.com/',
        rpc: [
            'https://polygon-rpc.com',
            'https://1rpc.io/matic',
            'https://rpc.ankr.com/polygon',
            'https://polygon.drpc.org',
            'https://gateway.tenderly.co/public/polygon',
            'https://polygon-pokt.nodies.app',
            'https://rpc-mainnet.maticvigil.com'
        ],
        currency: 'MATIC'
    },
    Arbitrum: {
        id: 110,
        chainId: 42161,
        UltraLightNode: ['0x4D73AdB72bC3DD368966edD0f0b2148401A178E2'],
        explorer: 'https://arbiscan.io/',
        rpc: [
            'https://rpc.arb1.arbitrum.gateway.fm',
            'https://arb1.arbitrum.io/rpc',
            'https://rpc.ankr.com/arbitrum',
            'https://arbitrum-one.public.blastapi.io',
            'https://arbitrum-one-rpc.publicnode.com',
            'https://arbitrum-one.publicnode.com',
            'https://arbitrum.drpc.org'
        ],
        currency: 'ETH'
    },
    Optimism: {
        id: 111,
        chainId: 10,
        UltraLightNode: ['0x4D73AdB72bC3DD368966edD0f0b2148401A178E2'],
        explorer: 'https://optimistic.etherscan.io/',
        rpc: [
            'https://optimism-mainnet.public.blastapi.io',
            'https://1rpc.io/op',
            'https://rpc.ankr.com/optimism',
            'https://rpc.optimism.gateway.fm',
            'https://optimism.drpc.org',
            'https://gateway.tenderly.co/public/optimism'
        ],
        currency: 'ETH'
    },
    Fantom: {
        id: 112,
        chainId: 250,
        UltraLightNode: ['0x4D73AdB72bC3DD368966edD0f0b2148401A178E2'],
        explorer: 'https://ftmscan.com/',
        rpc: [
            'https://rpcapi.fantom.network',
            'https://fantom-pokt.nodies.app',
            'https://rpc.ftm.tools',
            'https://rpc.ankr.com/fantom',
            'https://rpc.fantom.network',
            'https://rpc2.fantom.network',
            'https://rpc3.fantom.network'
        ],
        currency: 'FTM'
    },
    DFK: {
        id: 115,
        chainId: 53935,
        UltraLightNode: ['0x658fd63Dca9378e3B7DEb49463D0b25336433F91'],
        explorer: 'https://subnets.avax.network/defi-kingdoms/',
        rpc: ['https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc'],
        currency: 'JEWEL'
    },
    Harmony: {
        id: 116,
        chainId: 1666600000,
        UltraLightNode: ['0x4d73adb72bc3dd368966edd0f0b2148401a178e2'],
        explorer: 'https://explorer.harmony.one/',
        rpc: [
            'https://api.harmony.one',
            'https://a.api.s0.t.hmny.io',
            'https://api.s0.t.hmny.io',
            'https://rpc.ankr.com/harmony',
            'https://harmony.api.onfinality.io/public',
            'https://1rpc.io/one',
            'https://hmyone-pokt.nodies.app',
            'https://endpoints.omniatech.io/v1/harmony/mainnet-0/public'
        ],
        currency: 'ONE'
    },
    Celo: {
        id: 125,
        chainId: 42220,
        UltraLightNode: ['0xc1B621b18187F74c8F6D52a6F709Dd2780C09821'],
        explorer: 'https://explorer.celo.org/mainnet/',
        rpc: ['https://rpc.ankr.com/celo', 'https://forno.celo.org', 'https://1rpc.io/celo', 'https://celo.api.onfinality.io/public'],
        currency: 'CELO'
    },
    Gnosis: {
        id: 145,
        chainId: 100,
        UltraLightNode: ['0x38dE71124f7a447a01D67945a51eDcE9FF491251', '0x9740FF91F1985D8d2B71494aE1A2f723bb3Ed9E4'],
        explorer: 'https://gnosisscan.io/',
        rpc: [
            'https://rpc.gnosischain.com',
            'https://rpc.gnosis.gateway.fm',
            'https://gnosis-mainnet.public.blastapi.io',
            'https://rpc.ankr.com/gnosis',
            'https://gnosis.blockpi.network/v1/rpc/public',
            'https://gnosis.api.onfinality.io/public',
            'https://gnosis.drpc.org'
        ],
        currency: 'XDAI'
    },
    Metis: {
        id: 151,
        chainId: 1088,
        UltraLightNode: ['0x38dE71124f7a447a01D67945a51eDcE9FF491251'],
        explorer: 'https://andromeda-explorer.metis.io/',
        rpc: ['https://metis-mainnet.public.blastapi.io', 'https://metis.api.onfinality.io/public', 'https://metis-pokt.nodies.app'],
        currency: 'METIS'
    },
    Core: {
        id: 153,
        chainId: 1116,
        UltraLightNode: ['0x38dE71124f7a447a01D67945a51eDcE9FF491251'],
        explorer: 'https://scan.coredao.org/',
        rpc: ['https://rpc.ankr.com/core', 'https://rpc.coredao.org', 'https://core.public.infstones.com', 'https://1rpc.io/core'],
        currency: 'CORE'
    },
    ZKEVM: {
        id: 158,
        chainId: 1101,
        UltraLightNode: ['0xFe7C30860D01e28371D40434806F4A8fcDD3A098'],
        explorer: 'https://zkevm.polygonscan.com/',
        rpc: [
            'https://zkevm-rpc.com',
            'https://rpc.ankr.com/polygon_zkevm',
            'https://rpc.polygon-zkevm.gateway.fm',
            'https://1rpc.io/polygon/zkevm',
            'https://polygon-zkevm.blockpi.network/v1/rpc/public',
            'https://polygon-zkevm-mainnet.public.blastapi.io',
            'https://api.zan.top/node/v1/polygonzkevm/mainnet/public',
            'https://polygon-zkevm.drpc.org'
        ],
        currency: 'ETH'
    },
    Zksync: {
        id: 165,
        chainId: 324,
        UltraLightNode: ['0x042b8289c97896529Ec2FE49ba1A8B9C956A86cC'],
        explorer: 'https://era.zksync.network/',
        rpc: [
            'https://mainnet.era.zksync.io',
            'https://zksync-era.blockpi.network/v1/rpc/public',
            'https://zksync.drpc.org',
            'https://1rpc.io/zksync2-era'
        ],
        currency: 'ETH'
    },
    ArbitrumNova: {
        id: 175,
        chainId: 42170,
        UltraLightNode: ['0x2D61DCDD36F10b22176E0433B86F74567d529aAa'],
        explorer: 'https://nova.arbiscan.io/',
        rpc: [
            'https://nova.arbitrum.io/rpc',
            'https://arbitrum-nova.public.blastapi.io',
            'https://arbitrum-nova.blockpi.network/v1/rpc/public',
            'https://arbitrum-nova-rpc.publicnode.com',
            'https://arbitrum-nova.drpc.org',
            'https://arbitrum-nova.publicnode.com'
        ],
        currency: 'ETH'
    },
    Mantle: {
        id: 181,
        chainId: 5000,
        UltraLightNode: ['0x38dE71124f7a447a01D67945a51eDcE9FF491251'],
        explorer: 'https://explorer.mantle.xyz/',
        rpc: [
            'https://rpc.mantle.xyz',
            'https://mantle-rpc.publicnode.com',
            'https://mantle-mainnet.public.blastapi.io',
            'https://rpc.ankr.com/mantle',
            'https://1rpc.io/mantle'
        ],
        currency: 'MNT'
    },
    Linea: {
        id: 183,
        chainId: 59144,
        UltraLightNode: ['0x38dE71124f7a447a01D67945a51eDcE9FF491251'],
        explorer: 'https://lineascan.build/',
        rpc: ['https://rpc.linea.build', 'https://linea.blockpi.network/v1/rpc/public', 'https://1rpc.io/linea', 'https://linea.drpc.org'],
        currency: 'ETH'
    },
    Base: {
        id: 184,
        chainId: 8453,
        UltraLightNode: ['0x38dE71124f7a447a01D67945a51eDcE9FF491251'],
        explorer: 'https://basescan.org/',
        rpc: [
            'https://mainnet.base.org',
            'https://developer-access-mainnet.base.org',
            'https://1rpc.io/base',
            'https://base-pokt.nodies.app',
            'https://base-mainnet.public.blastapi.io',
            'https://gateway.tenderly.co/public/base',
            'https://base-rpc.publicnode.com',
            'https://base.drpc.org',
            'https://endpoints.omniatech.io/v1/base/mainnet/public'
        ],
        currency: 'ETH'
    },
    // Zora: {
    //     id: 195,
    //     chainId: 7777777,
    //     UltraLightNode: ['0x38dE71124f7a447a01D67945a51eDcE9FF491251'],
    //     explorer: 'https://explorer.zora.energy/',
    //     rpc: ['https://rpc.zora.energy'],
    //     currency: 'ETH'
    // },
    Opbnb: {
        id: 202,
        chainId: 204,
        UltraLightNode: ['0x38dE71124f7a447a01D67945a51eDcE9FF491251'],
        explorer: 'https://opbnbscan.com/',
        rpc: ['https://opbnb-mainnet-rpc.bnbchain.org', 'https://opbnb-rpc.publicnode.com', 'https://1rpc.io/opbnb'],
        currency: 'BNB'
    },
    Scroll: {
        id: 214,
        chainId: 534352,
        UltraLightNode: ['0x38dE71124f7a447a01D67945a51eDcE9FF491251'],
        explorer: 'https://scrollscan.com/',
        rpc: [
            'https://rpc.scroll.io',
            'https://scroll-mainnet.public.blastapi.io',
            'https://scroll-mainnet-public.unifra.io',
            'https://scroll.blockpi.network/v1/rpc/public',
            'https://1rpc.io/scroll',
            'https://scroll.drpc.org',
            'https://rpc.ankr.com/scroll'
        ],
        currency: 'ETH'
    },
    Manta: {
        id: 217,
        chainId: 169,
        UltraLightNode: ['0x38dE71124f7a447a01D67945a51eDcE9FF491251'],
        explorer: 'https://pacific-explorer.manta.network/',
        rpc: ['https://1rpc.io/manta', 'https://pacific-rpc.manta.network/http'],
        currency: 'MANTA'
    }
}
export const idToName: {[key: number]: string} = {
    101: 'Ethereum',
    102: 'BSC',
    106: 'Avalanche',
    109: 'Polygon',
    110: 'Arbitrum',
    111: 'Optimism',
    112: 'Fantom',
    115: 'DFK',
    116: 'Harmony',
    125: 'Celo',
    145: 'Gnosis',
    151: 'Metis',
    153: 'Core',
    158: 'ZKEVM',
    165: 'Zksync',
    175: 'ArbitrumNova',
    181: 'Mantle',
    183: 'Linea',
    184: 'Base',
    195: 'Zora',
    202: 'Opbnb',
    214: 'Scroll',
    217: 'Manta'
}
export let priceStorage: {[key: string]: number} = {
    XDAI: 1,
    JEWEL: 0.2
}
