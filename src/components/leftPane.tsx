import React from 'react';
import swap from '../assets/swap.svg'; 
import deposite from '../assets/deposit.svg';
import borrow from '../assets/borrow.svg';

const LeftPane: React.FC = () => {
  return (
    <div>
        <div className="sidePane">
          <div className='logo'>
            <img src={swap} alt="swap" />
          </div>

          <div className='swap'>
            <button>
              <img src={swap} alt="swap" />
            </button>
          </div>
          <div className='swap'>
            <button>
             <img src={deposite} alt="deposite" />
            </button>
          </div>
          <div className='swap'>
            <button>
              <img src={borrow} alt="borrow" />
            </button>
          </div>
        </div>
    </div>
  );
};

export default LeftPane;
