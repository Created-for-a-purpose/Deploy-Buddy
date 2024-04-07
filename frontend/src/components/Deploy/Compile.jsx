import React, { useState } from 'react'
import { create2DeployerAddress, create2DeployerAbi } from "../../constants"
import { readContract } from "@wagmi/core"
import { encodePacked } from 'viem';
import { sendTx } from "../pimlico/sendTx"
import { usePublicClient, useWalletClient, useChainId, useChains } from 'wagmi'

function Compile() {
  const [contractAbi, setContractAbi] = useState('');
  const [contractBytecode, setContractBytecode] = useState('');
  const [saltValue, setSaltValue] = useState('');

  const publicClient = usePublicClient()
  const walletClient = useWalletClient()
  const chainId = useChainId()
  const chains = useChains()

  const getChain = () => {
    return chains.find((chain) => chain.id === chainId);
  }

  const handleAbiChange = (e) => {
    setContractAbi(e.target.value);
  };

  const handleBytecodeChange = (e) => {
    setContractBytecode(e.target.value);
  };

  const handleSaltChange = (e) => {
    setSaltValue(e.target.value);
  };

  const computeAddress = async () => {
    if (salt === '') return;
    const saltbytes = encodePacked(['uint256'], [salt]);
    const address = await readContract({
      address: create2DeployerAddress,
      abi: create2DeployerAbi,
      functionName: 'computeAddress',
      args: [saltbytes, contractBytecode],
    });

    return { saltbytes, address };
  };

  const deploy = async () => {
    const { saltbytes, address } = computeAddress()
    const data = ''
    const txParams = {
      to: create2DeployerAddress,
      value: 0,
      data
    }
    await sendTx(publicClient, walletClient, txParams, getChain())
    console.log('Deployed at:', address)
  }

  return (
    <div className='mt-[120px] flex justify-center item-center'>
      <div className='border border-red-100 w-2/3 '>

        <h1 className='text-xl font-semibold'>Deploy Smart Contract</h1>

        <form className='mt-[25px]'>
          <textarea
            className='w-2/3 p-2 mt-2 border border-gray-300 rounded'
            rows='3'
            placeholder='Paste your contract ABI'
            value={contractAbi}
            onChange={handleAbiChange}
          />
          <textarea
            className='w-2/3 p-2 mt-2 border border-gray-300 rounded'
            rows='3'
            placeholder='Paste your contract bytecode'
            value={contractBytecode}
            onChange={handleBytecodeChange}
          />
        </form>

        <p className='mt-[25px]'>Enter the salt value</p>
        <input type='number' placeholder="Enter salt value"
          value={saltValue}
          onChange={handleSaltChange}
          className='w-2/3 p-2 mt-2 border border-gray-300 rounded'
        />

        <div className='mt-[20px] mb-[25px]'>
          <p>Initialize constructor params</p>
          <button className='border border-2 px-[10px] py-[5px] font-medium text-lg'>Initialize</button>
          <p className='mt-[25px]'>Click below to deploy</p>
          <button className='border border-2 py-[5px] font-medium text-lg w-2/3' onClick={deploy}>Deploy</button>
        </div>
      </div>
    </div>
  )
}

export default Compile
