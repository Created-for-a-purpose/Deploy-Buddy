import { getUserOperationHash, signUserOperationHashWithECDSA } from "permissionless"
import { signMessage } from "viem/actions"

export const signUserOperation = async (
    walletClient,
    userOperation,
    entryPoint,
    chainId
) => {
    const userOperationHash = getUserOperationHash({
        userOperation,
        chainId,
        entryPoint,
    })
    const signature = await signMessage(walletClient, {
        message: {
            raw: userOperationHash
        }
    })
    return signature
}