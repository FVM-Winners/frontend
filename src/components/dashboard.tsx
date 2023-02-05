import React from 'react';
const Dashboard: React.FC<{Desposited:string,
Balance: string, 
Borrowed: string,
// array: {
//     id: string,
//     ethval: number,
//     usdval: number, 
// }[]
}> = ({Desposited, Balance, Borrowed}) => {
    const enableEthereum = async () => {
        await ethereum.request({ method: 'eth_requestAccounts' });
        globalThis.meta = true;
    }
if(globalThis.meta){
    return (
        <div className='dashboard'>
            <div>
                <div className="wallet2">
                <button className='metamask'>Connected</button>
                </div> 
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='heading'>
                Dashboard
            </div>
            <div className='stuff'>
                        
                <div className='stuffandar'>
                    <div>
                        Desposited 
                    </div>
                    <div className='stuffval'>
                        {Desposited}
                    </div>
                </div>
                <div className='stuffandar-balance'>
                    <div>
                        Balance
                    </div>
                    <div className='stuffval'>
                        {Balance}
                    </div>
                </div>
                <div className='stuffandar'>
                        <div>
                            Borrowed
                        </div> 
                        <div className='stuffval'> 
                            {Borrowed}
                        </div>
                </div>
            </div>
        </div>
      );
}
else{
    return (
        <div className='dashboard'>
            <div>
                <div className="wallet1">
                <button className='metamask' onClick={enableEthereum}>Connect MetaMask Wallet +</button>
                </div> 
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='heading'>
                Dashboard
            </div>
            <div className='stuff'>
                        
                <div className='stuffandar'>
                    <div>
                        Desposited 
                    </div>
                    <div className='stuffval'>
                        {Desposited}
                    </div>
                </div>
                <div className='stuffandar-balance'>
                    <div>
                        Balance
                    </div>
                    <div className='stuffval'>
                        {Balance}
                    </div>
                </div>
                <div className='stuffandar'>
                        <div>
                            Borrowed
                        </div> 
                        <div className='stuffval'> 
                            {Borrowed}
                        </div>
                </div>
            </div>
        </div>
      );
    };
}
  

export default Dashboard;
