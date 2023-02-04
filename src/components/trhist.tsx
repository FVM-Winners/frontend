import React from 'react';
import {ethers} from 'ethers';

const Tranhistory: React.FC<{}> = () => {
    const address = new ethers.providers.Web3Provider(window.ethereum).getSigner().getAddress()
 
    if ( address == null){
    return (  
            <div>
    <div className="tranhist">
        <div className='heading'>
            Transaction History
        </div>
    </div> 
    </div>  
    )
    }
    else{
        
        console.log(history)
        return (
            <div style={{
                display:"flex",
                flexDirection:"column",
            }}>
    <div className="tranhist">
        <div className='heading'>
            Transaction History
        </div>
    </div>
    <div className="hist">
    {/* .then((history) => {
    history.forEach((tx) => {
        console.log(tx);
    })
}) */}
  </div>
  </div>
  );
}
};

export default Tranhistory;
