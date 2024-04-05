import React from 'react'

function Navbar() {
  return (
    <navbar>
    <div className='flex flex-row justify-between'>
    <h1 className='font-bold text-4xl'>crossx</h1>

    <div>
    <ul className='flex flex-row gap-x-10 font-semibold text-xl '>
    <li>Home</li>
    <li>Deploy</li>
    <li>Explorer</li>
  </ul>
  </div>

    <h2 className='font-medium bg-slate-300 border border-xl px-[10px] py-[10px] rounded-xl'>Get started -></h2>
    </div>
   
    </navbar>
  )
}

export default Navbar
