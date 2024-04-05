import React from 'react'

function Footer() {
  return (
    <div>
    <footer >
    <div className='mt-[100px]'>
      <h1 className='text-3xl font-semibold text-slate-900'>Built for Innovators, by Innovators</h1>
      <p className='text-xl  mt-[30px]'>Empowering the builders of tomorrow with CrossX's multi-chain smart contract management platform</p>
      </div>
      <div className='mt-[75px]  '>
        <h1 className='text-3xl font-semibold flex flex-start'>Crossx</h1>
        <p className='text-lg mt-[30px] flex flex-start'>CrossX is currrently built for Open Data Hackathon and should be used at your own risk. We take security seriously and our contracts have been thoroughly tested and formally verified but bugs may still exist.</p>
        <p className='flex flex-start text-sm'>© 2023 CrossX Inc.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
