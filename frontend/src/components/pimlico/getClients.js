import { createClient } from "viem"
import { sepolia, optimismSepolia, arbitrumSepolia, polygonAmoy } from "viem/chains"
import { bundlerActions } from "permissionless"
import { pimlicoBundlerActions, pimlicoPaymasterActions } from "permissionless/actions/pimlico"

export const getChainName = (chain) => {
    if (chain === sepolia)
        return 'sepolia'
    else if (chain === optimismSepolia)
        return 'optimism-sepolia'
    else if (chain === arbitrumSepolia)
        return 'arbitrum-sepolia'
    else if (chain === polygonAmoy)
        return 'polygon-amoy'
}

export const getClients = async (chain) => {
    const apiKey = import.meta.env.VITE_APP_PIMLICO_API_KEY
    const chainName = getChainName(chain)

    const bundlerClient = createClient({
        transport: http(`https://api.pimlico.io/v1/${chainName}/rpc?apikey=${apiKey}`),
        chain: chain
    }).extend(bundlerActions).extend(pimlicoBundlerActions)

    const paymasterClient = createClient({
        transport: http(`https://api.pimlico.io/v2/${chainName}/rpc?apikey=${apiKey}`),
        chain: chain
    }).extend(pimlicoPaymasterActions)

    return { bundlerClient, paymasterClient }
}