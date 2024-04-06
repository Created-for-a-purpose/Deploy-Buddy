import React from 'react'
import ContractDetails from './ContractDetails';
import { Link } from 'react-router-dom';

function Deploy() {
  return (
    <div className=' mt-[120px] flex justify-center item-center'>

     <div className='border border-red-100 w-2/3 '>
           <h1 className='mt-[25px]'>Deploy Contracts</h1>

           <div className='mt-[30px] flex flex-row justify-center'>
          
            <div className='flex flex-col ml-[30px]'>
             <h2 className='text-xl'> 💜Basic details</h2>
             <p >Enter contract description</p>
            </div>
           </div>

           <div className='mt-[30px] flex flex-row justify-center'>
         
           <div className='flex flex-col '>
            <h2 className='text-xl'>❤️ Choose a chain</h2>
            <p>Select a chain for deploying contract</p>
           </div>
          </div>

          <div className='mt-[30px] flex flex-row justify-center'>
         
          <div className='flex flex-col '>
           <h2 className='text-xl'>🔗 Multichain deployment</h2>
           <p>Choose mutlichains to deploy</p>
          </div>
         </div>

         <div className='mt-[30px] flex flex-row justify-center'>
        
         <div className='flex flex-col '>
          <h2 className='text-xl'> 👁️ Deploy Contract</h2>
          <p>Paste the contract for deployment</p>
         </div>
        </div>

        <div className='mt-[30px] flex flex-row justify-center'>
      
        <div className='flex flex-col '>
         <h2 className='text-xl'>✅ Success</h2>
         <p>Great! Check the deployed contract</p>
        </div>
       </div>

    <button className='mt-[25px] mb-[25px] border border-blue-300 px-[25px] py-[10px]
    text-xl font-semibold'>
    <Link to={ContractDetails}>Get started</Link>
    </button>

     </div>

    </div>



    // <div className='mt-[120px] flex justify-center item-center'>

    // <div className='border border-red-100 w-2/3 '>
    // <h1 className='mt-[25px]'>Enter Contract Details</h1>
    // </div>
    
    // </div>
  )
}

export default Deploy
