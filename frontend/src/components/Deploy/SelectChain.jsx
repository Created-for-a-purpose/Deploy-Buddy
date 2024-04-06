import React from 'react'

function SelectChain() {
  return (
    <div className='mt-[120px] flex justify-center item-center'>
      <div className='border border-red-100 w-2/3 '>
        <h1 className='mt-[25px] text-xl font-semibold'>Select Chain</h1>

        <div className='flex justify-between mt-[25px] mb-[25px]'>
          <button className='ml-[15px] border border-2 px-[10px] py-[10px]'><a href='/contract-details'>Back</a></button>
          <button className='mr-[15px] border border-2 px-[10px] py-[10px]'><a href='/compile'>Next</a></button>
        </div>
      </div>
    </div>
  )
}

export default SelectChain
