import React from 'react'

function Home() {
  return (
    <div>
      <section>
        <div className='flex flex-row justify-between mt-[100px]'>
          <div>
            <h1 className='font-bold text-6xl'>Deploy Buddy</h1>
            <p className='font-semibold text-3xl mt-[20px]'>Deploy with ease!</p>
          </div>
          <div>
            <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg
    shadow-gray-500" src='https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </div>
        </div>

        <div className='border rouded-tl-3xl mt-[100px] mb-[50px]'>

          <div>
            <h1 className='font-medium text-4xl mt-[50px]'>Onboarding developers to build on Chainlink!</h1>
            <p className='text-xl mt-[40px] '>Do not worry about gas, just deploy!</p>
          </div>


          <div className='flex flex-row mt-[140px] mb-[40px]'>
            <div className='ml-[15px]'>
              <h1 className='text-3xl font-semibold'>Deploy on MultiChain</h1>
              <p className='text-xl  mt-[30px]'> Tired of managing different address of same contracts over <br /> multiple chains?
                Use our Deployer to deploy your smartcontracts <br /> on not only one but  multiple chain, that also <br /> with only one contract address!</p>
              <button className='mt-[20px] bg-slate-300 border rounded-xl px-[15px]
     py-[15px] font-semibold text-xl'>
                <a href='/deploy'>CCIP --&gt;</a></button>
            </div>
            <div>
              <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg ml-[60px]
      shadow-gray-500" src='https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
          </div>

          <div className='flex flex-row mt-[140px] mb-[40px]'>
            <div>
              <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg ml-[55px]
     shadow-gray-500" src='https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
            <div className='ml-[55px]'>
              <h1 className='text-3xl font-semibold'>Explore Contracts</h1>
              <p className='text-xl  mt-[30px]'> Get boared of using average blockchain explorer ? Try <br /> out Explorer
                to manage all the transactions , contracts , <br />ABIs and much more deployed by our deployer  <br /> with only one contract address!</p>
              <button className='mt-[20px] bg-slate-300 border rounded-xl px-[15px]
    py-[15px] font-semibold text-xl'>
                <a href='/explorer'>Automation --&gt;</a></button>
            </div>

          </div>

        </div>

      </section>


    </div>
  )
}

export default Home
