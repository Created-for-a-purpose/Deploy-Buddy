import React from 'react'
import { useState } from 'react';

function Compile() {

    const [contractCode, setContractCode] = useState('');

    const handleChange = (event) => {
      setContractCode(event.target.value);
    };

  return (
    <div className='mt-[120px] flex justify-center item-center'>
    <div className='border border-red-100 w-2/3 '>

  <h1 className='text-xl font-semibold'>Deploy Smart Contract</h1>

  <form className='mt-[25px]'>
  <textarea
    className='w-2/3 p-2 mt-2 border border-gray-300 rounded'
    rows='6'
    placeholder='Paste your contract'
    value={contractCode}
    onChange={handleChange}
  ></textarea>
</form>

<div>
<p>Click on the initialise button to start</p>
</div>

    </div>
    </div>
  )
}

export default Compile
