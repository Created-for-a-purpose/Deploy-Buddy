import { http } from "viem"
import { createPimlicoBundlerClient, createPimlicoPaymasterClient } from 'permissionless/clients/pimlico'

export const getClients = async (chain) => {
    const apiKey = import.meta.env.VITE_APP_PIMLICO_API_KEY

    const bundlerClient = createPimlicoBundlerClient({
        transport: http(`https://api.pimlico.io/v1/${chain.id}/rpc?apikey=${apiKey}`),
        chain: chain
    })

    const paymasterClient = createPimlicoPaymasterClient({
        transport: http(`https://api.pimlico.io/v2/${chain.id}/rpc?apikey=${apiKey}`),
        chain: chain
    })

    return { bundlerClient, paymasterClient }
}