import { concat, encodeFunctionData } from 'viem'

export const generateInitCode = (factoryAddress, userAddress) => {
    return concat([
        factoryAddress,
        encodeFunctionData({
            abi: [{
                inputs: [{ name: "owner", type: "address" }, { name: "salt", type: "uint256" }],
                name: "createAccount",
                outputs: [{ name: "ret", type: "address" }],
                stateMutability: "nonpayable",
                type: "function",
            }],
            functionName: 'createAccount',
            args: [userAddress, 0n],
        }),
    ])
}