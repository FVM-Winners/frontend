import React from 'react';
import Dropdown from './dropdown';
import {ethers} from 'ethers';
const Mint: React.FC<{}> = () => {
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
    const mintfunction() = async () => {  
        console.log("Mint function called");
    }

    return (
        <div className="centerstuff">
        <div className='heading'>
        Mint
    </div>
    <div className='swapdiv'>
    <br/><br/><br/>
    <div className='swapform'>
        <form>
            <Dropdown array={array} Name="token"/>
            <button className='swapbutton' onClick={mintfunction()}>
                Mint
            </button>
        </form>
    </div>    
    </div>
</div>
)}

export default Mint