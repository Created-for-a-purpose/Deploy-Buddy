import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Explorer from './Explorer';
import Deploy from './Deploy';
import {useNavigate} from "react-router-dom"

function Navbar() {
 
  // const navigate=useNavigate();
  return (
    <navbar>
      <div className='flex flex-row justify-between'>
        <h1 className='font-bold text-4xl'>crossx</h1>

        <div>
          <ul className='flex flex-row gap-x-10 font-semibold text-xl'>
            <li >
            <a href='/'>Home</a>
            </li>
            <li>
            <a href='/deploy'>Deploy</a>
            </li>
            <li>
            <a href='/explorer'>Explorer</a>
            </li>
          </ul>
        </div>

        <p className='font-medium bg-slate-300 border border-xl px-[10px] py-[10px] rounded-xl'>Get started -&gt;</p>
      </div>
    </navbar>
  );
}

export default Navbar;
