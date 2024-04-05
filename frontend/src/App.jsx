import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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

     <section>
           <div className='flex flex-row justify-between mt-[100px]'>
              <div>
                <h1 className='font-bold text-6xl'>CrossX</h1>
                <p className='font-semibold text-3xl mt-[20px]'>Crosschain deployer and explorer</p>
              </div>
              <div>
           <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg
           shadow-gray-500" src='https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
              </div>
         </div>

           <div className='border rouded-tl-3xl mt-[100px] mb-[50px]'>

           <div>
           <h1 className='font-medium text-4xl mt-[50px]'>Making Layer2 Onboarding easier!</h1>
           <p className='text-xl mt-[40px] '>CrossX is the modern solution for hassle-free smart  <br/> contract deployment, management, and verification<br/>
            on multiple chains - "All at your fingertips!"</p>
           </div>


            <div className='flex flex-row mt-[140px] mb-[40px]'>
             <div>
             <h1 className='text-3xl font-semibold'>Deploy on MultiChain</h1>
            <p className='text-xl  mt-[30px]'> Tired of managing different address of same contracts over <br/> multiple chains?
            Use our Deployer to deploy your smartcontracts <br/> on not only one but  multiple chain, that also <br/> with only one contract address!</p>
            <button className='mt-[20px] bg-slate-300 border rounded-xl px-[15px]
            py-[15px] font-semibold text-xl'>Deploy -></button>
             </div>
             <div>
             <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg ml-[55px]
             shadow-gray-500" src='https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
             </div>
            </div>
            
           </div>
     </section>

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
    </>

  )
}

export default App
