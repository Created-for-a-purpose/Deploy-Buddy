import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './components/Home.jsx'

import Navbar from './components/Navbar.jsx'
import Explorer from './components/Explorer.jsx'
import Deploy from './components/Deploy.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/deploy' element={<Deploy/>}/>
    <Route path='/explorer' element={<Explorer/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar/>
 <RouterProvider router={router}/>
  </React.StrictMode>,
)
