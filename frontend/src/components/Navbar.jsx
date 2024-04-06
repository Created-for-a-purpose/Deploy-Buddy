import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {

  return (
    <navbar>
      <div className='flex flex-row justify-between'>
        <h1 className='font-bold text-4xl'>D'Buddy</h1>

        <div>
          <ul className='flex flex-row gap-x-10 font-semibold text-xl'>
            <li >
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/deploy'>CCIP</a>
            </li>
            <li>
              <a href='/automation'>Automation</a>
            </li>
          </ul>
        </div>
        <ConnectButton chainStatus={'icon'} showBalance={false} />
      </div>
    </navbar>
  );
}

export default Navbar;