import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './components/Home.jsx'

import Navbar from './components/Navbar.jsx'
import Explorer from './components/Explorer.jsx'
import Deploy from './components/Deploy/Deploy.jsx'
import ContractDetails from './components/Deploy/ContractDetails.jsx'
import SelectChain from './components/Deploy/SelectChain.jsx'
import Compile from './components/Deploy/Compile.jsx'


import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'e7fa7d19fd057ecd9403a0e89bd62b8b',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false
});



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/deploy' element={<Deploy/>}/>
    <Route path='/contract-details' element={<ContractDetails/>}/>
    <Route path='/select-chain' element={<SelectChain/>}/>
    <Route path='/explorer' element={<Explorer/>}/>
    <Route path='/compile' element={<Compile/>}/>
    </Route>
  )
)

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
    <RainbowKitProvider>
    <Navbar/>
    <RouterProvider router={router}/>
    </RainbowKitProvider>
  </QueryClientProvider>
</WagmiProvider>

 
  </React.StrictMode>,
)
