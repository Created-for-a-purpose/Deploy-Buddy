import React, { useState } from 'react';
import { useAccount, usePublicClient, useWalletClient, useChainId, useChains } from 'wagmi';
import { encodeFunctionData } from 'viem';
import { automationAbi, automationAddress } from '../constants';
import { sendTx } from './pimlico/sendTx';
import { isSmartAccountDeployed } from 'permissionless';

function Automation() {
  const { address } = useAccount()
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    upkeepName: '',
    contractAddress: '',
    gasLimit: '',
    startingBalance: ''
  });

  const publicClient = usePublicClient()
  const { data: walletClient } = useWalletClient()
  const chainId = useChainId()
  const chains = useChains()

  const getChain = () => {
    return chains.find((chain) => chain.id === chainId);
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regParams = {
      name: formData.upkeepName,
      encryptedEmail: '0x',
      upkeepContract: formData.contractAddress,
      gasLimit: formData.gasLimit,
      adminAddress: address,
      triggerType: selectedOption,
      checkData: '0x',
      triggerConfig: '0x',
      offchainConfig: '0x',
      amount: formData.startingBalance
    }
    const data = encodeFunctionData({
      abi: automationAbi,
      args: [regParams]
    })
    const txParams = {
      to: automationAddress,
      data,
      value: 0
    }

    const hash = await sendTx(publicClient, walletClient, txParams, getChain())
    console.log(hash)
  };

  return (
    <div className='mt-[120px] flex justify-center item-center'>
      <div className='border border-red-100 w-2/3 '>
        <h1 className='text-xl font-semibold'>Automation</h1>
        <p className='mt-[25px]'>Select the trigger mechanism for automation</p>

        <div >
          <label>
            <input
              type='radio'
              value={0}
              checked={selectedOption == 0}
              onChange={handleOptionChange}
            />{' '}
            Conditional
          </label>
        </div>

        <div>
          <label>
            <input
              type='radio'
              value={1}
              checked={selectedOption == 1}
              onChange={handleOptionChange}
            />{' '}
            Log trigger
          </label>
        </div>

        <form onSubmit={handleSubmit} className='mt-[25px] mb-[25px]'>
          <div className="mb-4">
            <label className="block">Upkeep Name:</label>
            <input
              type='text'
              name='upkeepName'
              value={formData.upkeepName}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block">Contract Address:</label>
            <input
              type='text'
              name='contractAddress'
              value={formData.contractAddress}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block">Gas Limit:</label>
            <input
              type='number'
              name='gasLimit'
              value={formData.gasLimit}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block">Starting Balance (LINK)</label>
            <input
              type='number'
              name='startingBalance'
              value={formData.startingBalance}
              onChange={handleChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <button type='submit' className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Register Upkeep</button>
        </form>
      </div>
    </div>
  );
}

export default Automation;
