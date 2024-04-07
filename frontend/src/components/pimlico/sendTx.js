import { sponsorUserOperation } from "permissionless/actions/pimlico"
import { getSenderAddress, sendUserOperation, waitForUserOperationReceipt } from "permissionless"
import { generateInitCode } from "./getInitCode"
import { encodeFunctionData } from "viem"
import { buildUserOperation } from "./buildUserOp"
import { getClients } from "./getClients"
import { signUserOperation } from "./signUserOp"
import { isSmartAccountDeployed } from "permissionless"

const entryPoint = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
const factoryAddress = "0x9406Cc6185a346906296840746125a0E44976454"

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
    const userAddress = walletClient?.account?.address
    const initCode = generateInitCode(factoryAddress, userAddress)
    const sender = await getSenderAddress(publicClient, {
        initCode,
        entryPoint,
    })
    const callData = await generateCallData(txParams)
    const { bundlerClient, paymasterClient } = await getClients(chain)
    
    const userOperation = await buildUserOperation({
        sender,
        entryPoint,
        initCode,
        callData,
        bundlerClient,
        publicClient
    })

    const isAccountDeployed = await isSmartAccountDeployed(publicClient, sender);
    if (isAccountDeployed) userOperation.initCode = '0x'
    
    const sponsorUserOperationResult = await sponsorUserOperation(paymasterClient, {
        userOperation,
        entryPoint
    })
    const sponsoredUserOperation = {
        ...userOperation,
        ...sponsorUserOperationResult
    }
    const signature = await signUserOperation(
        walletClient,
        sponsoredUserOperation,
        entryPoint,
        chain.id
    )
    sponsoredUserOperation.signature = signature;

    const userOperationHash = await sendUserOperation(bundlerClient, {
        userOperation: sponsoredUserOperation,
        entryPoint
    })

    const receipt = await waitForUserOperationReceipt(bundlerClient, {
        hash: userOperationHash
    })

    const txHash = receipt.receipt.transactionHash
    return txHash
}