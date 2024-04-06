import { getSenderAddress } from "permissionless"
import { generateInitCode } from "./getInitCode"
import { encodeFunctionData } from "viem"
import { buildUserOperation } from "./buildUserOp"
import { getClients } from "./getClients"
import { signUserOperation } from "./signUserOp"

const factoryAddress = "0x9406Cc6185a346906296840746125a0E44976454"
const entryPointAddress = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"

const generateCallData = async (txParams) => {
    const callData = encodeFunctionData({
        abi: [
            {
                inputs: [
                    { name: "dest", type: "address" },
                    { name: "value", type: "uint256" },
                    { name: "func", type: "bytes" }
                ],
                name: "execute",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }
        ],
        args: [txParams.to, txParams.value, txParams.data]
    })

    return callData
}

export const sendTx = async (
    publicClient,
    walletClient,
    txParams,
    chain
) => {
    const [userAddress] = walletClient.getAddresses()
    const initCode = generateInitCode(factoryAddress, userAddress)
    const callData = generateCallData(txParams)
    const sender = await getSenderAddress(initCode, entryPointAddress)
    const { bundlerClient, paymasterClient } = await getClients(chain)

    const userOperation = await buildUserOperation(
        sender,
        entryPointAddress,
        initCode,
        callData,
        bundlerClient,
        publicClient
    )

    const sponsorUserOperationResult = await paymasterClient.sponsorUserOperation({
        userOperation,
        entryPoint: entryPointAddress
    })
    const sponsoredUserOperation = {
        ...userOperation,
        preVerificationGas: sponsorUserOperationResult.preVerificationGas,
        verificationGasLimit: sponsorUserOperationResult.verificationGasLimit,
        callGasLimit: sponsorUserOperationResult.callGasLimit,
        paymasterAndData: sponsorUserOperationResult.paymasterAndData
    }
    const signature = await signUserOperation(
        walletClient,
        sponsorUserOperationResult,
        chain.id,
        entryPointAddress
    )
    sponsoredUserOperation.signature = signature;

    const userOperationHash = await bundlerClient.sendUserOperation({
        userOperation: sponsoredUserOperation,
        entryPoint: entryPointAddress
    })

    const receipt = await bundlerClient.waitForUserOperationReceipt({ hash: userOperationHash })

    const txHash = receipt.receipt.transactionHash
    return txHash
}