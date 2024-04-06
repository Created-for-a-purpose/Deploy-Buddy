import { getAccountNonce } from 'permissionless'
import { getUserOperationGasPrice } from 'permissionless/actions/pimlico'

export const buildUserOperation = async ({
  sender,
  entryPoint,
  initCode,
  callData,
  bundlerClient,
  publicClient
}) => {
  const gasPriceResult = await getUserOperationGasPrice(bundlerClient)
  const nonce = await getAccountNonce(publicClient, { entryPoint, sender })
  const userOperation = {
    sender,
    nonce,
    initCode,
    callData,
    maxFeePerGas: gasPriceResult.fast.maxFeePerGas,
    maxPriorityFeePerGas: gasPriceResult.fast.maxPriorityFeePerGas,
    // dummy signature, needs to be there so the SimpleAccount doesn't immediately revert because of invalid signature length
    signature: '0xa15569dd8f8324dbeabf8073fdec36d4b754f53ce5901e283c6de79af177dc94557fa3c9922cd7af2a96ca94402d35c39f266925ee6407aeb32b31d76978d4ba1c'
  }
  return userOperation
}