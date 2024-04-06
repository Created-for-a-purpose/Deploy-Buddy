import React from 'react'
import { useState } from 'react';

function VRF() {

  const [adminAddress, setAdminAddress] = useState('');

  const handleAdminAddressChange = (event) => {
    setAdminAddress(event.target.value);
  };

  return (
    <div className='mt-[120px] flex justify-center item-center'>
    <div className='border border-red-100 w-2/3 '>
    <h1 className='text-xl font-semibold'>VRF</h1>

       <button className='text-md font-medium border px-[5px] py-[5px]
       bg-blue-700 text-white mt-[20px]'>Create Subscription</button>

       <form>
       <div className='mt-4'>
       <label className='block'>Consumer Address:</label>
       <input 
       type='text'
       value={adminAddress}
       onChange={handleAdminAddressChange}
       className="border border-gray-400 rounded-md p-2 w-2/3"
       placeholder="Enter admin address"
       />
       </div>
       </form>

       <button className='text-md font-medium border px-[5px] py-[5px]
       bg-blue-700 text-white mt-[20px]'>Add Consumer</button>
    </div>
    </div>
  )
}

export default VRF