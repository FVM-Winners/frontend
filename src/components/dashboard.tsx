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
        document.getElementsByClassName('wallet1')[0].style.display = 'none';
        document.getElementsByClassName('wallet2')[0].style.display = 'flex';
    }
  return (
    <div className='dashboard'>
    if(window.ethereum !== undefined){
        <div>
            <div className="wallet1">
            <button className='metamask' onClick={enableEthereum}>Connect MetaMask Wallet +</button>
            </div> 
            <div className="wallet2">
            <button className='metamask'>Connected</button>
            </div> 
        </div>
    }
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
        {/* <div className="link">
            <a href="#">View History &gt;&gt;</a>
        </div>
        <div className="assets">
            <div className="assets-heading">
                <div>
                    Defi Assets
                </div>
                <div>
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default Dashboard;
