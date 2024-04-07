export const create2DeployerAddress = ""
export const create2DeployerAbi = ""

export const automationAddress = "0x51026013F1145D61879fF774010080DF4520e431"
export const automationAbi = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "bytes",
                        "name": "encryptedEmail",
                        "type": "bytes"
                    },
                    {
                        "internalType": "address",
                        "name": "upkeepContract",
                        "type": "address"
                    },
                    {
                        "internalType": "uint32",
                        "name": "gasLimit",
                        "type": "uint32"
                    },
                    {
                        "internalType": "address",
                        "name": "adminAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint8",
                        "name": "triggerType",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes",
                        "name": "checkData",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "triggerConfig",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "offchainConfig",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint96",
                        "name": "amount",
                        "type": "uint96"
                    }
                ],
                "internalType": "struct RegistrationParams",
                "name": "params",
                "type": "tuple"
            }
        ],
        "name": "registerAndPredictID",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]