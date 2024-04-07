import { concat, encodeFunctionData } from 'viem'

export const generateInitCode = (factoryAddress, userAddress) => {
    return concat([
        factoryAddress,
        encodeFunctionData({
            abi: [{
                type: 'function',
                inputs: [
                    { name: 'owner', internalType: 'address', type: 'address' },
                    { name: 'salt', internalType: 'uint256', type: 'uint256' },
                ],
                name: 'createAccount',
                outputs: [
                    { name: 'ret', internalType: 'contract SimpleAccount', type: 'address' },
                ],
                stateMutability: 'nonpayable',
            }],
            args: [userAddress, 0n],
        }),
    ])
}