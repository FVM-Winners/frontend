import React from 'react';


const Dashboard: React.FC<{Desposited:string,
Balance: string, 
Borrowed: string}> = ({Desposited, Balance, Borrowed}) => {
  return (
    <div className='dashboard'>
        <div className="wallet">
            <button className='metamask'>Connect MetaMask Wallet</button>
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
                <button>
                    Desposited <br/>
                    {Desposited}
                </button>
            </div>
            <div className="stuffborder">
                <button>
                    Balance <br/>
                    {Balance}
                </button>
            </div>
            <div className="stuffborder">
                <button>
                    Borrowed <br/>
                    {Borrowed}
                </button>
            </div>
        </div>

    </div>
  );
};

export default Dashboard;
