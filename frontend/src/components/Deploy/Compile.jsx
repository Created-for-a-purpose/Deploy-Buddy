
import React from 'react'
import { useState } from 'react';

function Compile() {
  const [contractCode, setContractCode] = useState('');
  const [saltValue,setSaltValue]=useState('');

  const handleChange = (e) => {
    setContractCode(e.target.value);
  };

  const handleSaltChange = (e) => {
    setSaltValue(e.target.value);
  };


  return (
    <div className='mt-[120px] flex justify-center item-center'>
      <div className='border border-red-100 w-2/3 '>

        <h1 className='text-xl font-semibold'>Deploy Smart Contract</h1>

        <form className='mt-[25px]'>
          <textarea
            className='w-2/3 p-2 mt-2 border border-gray-300 rounded'
            rows='6'
            placeholder='Paste your contract ABI and bytecode JSON'
            value={contractCode}
            onChange={handleChange}
          />
        </form>

        <p className='mt-[25px]'>Enter the salt value</p>
        <input type='number' placeholder="Enter sale value"
        value={saltValue}
            onChange={handleSaltChange}
            className='w-2/3 p-2 mt-2 border border-gray-300 rounded'
             />

        <div className='mt-[20px] mb-[25px]'>
          <p>Initialize constructor params</p>
          <button className='border border-2 px-[10px] py-[5px] font-medium text-lg'>Initialize</button>
          <p className='mt-[25px]'>Click below to deploy</p>
          <button className='border border-2 py-[5px] font-medium text-lg w-2/3'>Deploy</button>
        </div>
      </div>
    </div>
  )
}

export default Compile
