import React from 'react';


const Dashboard: React.FC<{Desposited:string,
Balance: string, 
Borrowed: string}> = ({Desposited, Balance, Borrowed}) => {
  return (
    <div className='dashboard'>
        <div className="wallet">
            <button className='metamask'>Connect MetaMask Wallet +</button>
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
            <div className='stuffandar'>
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

export default Dashboard;
