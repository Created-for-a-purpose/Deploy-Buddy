import { signUserOperationHashWithECDSA } from "permissionless"

export const signUserOperation = async (
    walletClient,
    userOperation,
    entryPointAddress,
    chainId
) => {
    const signature = await signUserOperationHashWithECDSA({
        client: walletClient,
        userOperation: userOperation,
        chainId: chainId,
        entryPoint: entryPointAddress,
    })
    return signature
}