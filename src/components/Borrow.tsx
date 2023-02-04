import React from 'react';
import Dropdown from './dropdown';

const Borrow: React.FC<{}> = () => {
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
        Borrow
    </div>
    <div className='swapdiv'>
    <br/><br/><br/>
    <div className='swapform'>
        <form>
            <Dropdown array={array} Name="token"/>
            <button className='swapbutton'>
                Borrow
            </button>
        </form>
    </div>    
    </div>
</div>
    )
}

export default Borrow