import React from 'react';
import Dropdown from './dropdown';

const Deposit: React.FC<{}> = () => {
    var array=[
        {
            token: 'ETH',
        },
        {   
            token: 'Token2',
        },
        {
            token: 'Token3',
        },
    ]
    return (
        <div className="centerstuff">
        <div className='heading'>
                Deposite
            </div>
            <br/><br/><br/>
            <div className='swapform'>
            <div className='swapdiv'>
            
                <form>
                <Dropdown array={array} Name="token"/>

                    <button className='swapbutton'>
                        Deposit
                    </button>
                </form>
            </div>    
            </div>
        </div>
)}

export default Deposit