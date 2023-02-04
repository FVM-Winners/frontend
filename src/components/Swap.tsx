import React from 'react';


const Swap: React.FC<{}> = () => {
  return (
    <div className='swapdiv'>
        <div className='heading'>
            Swap
        </div>
        <br/><br/><br/>
        <div className='swapform'>
            <form>
                <label>
                    Select Token
                    <select>
                        <option value="token1">Token 1</option>
                        <option value="token2">Token 2</option>
                        <option value="token3">Token 3</option>
                    </select>
                </label><br/>
                <label>
                    Select Token
                    <select>
                        <option value="token1">Token 1</option>
                        <option value="token2">Token 2</option>
                        <option value="token3">Token 3</option>
                    </select>
                </label>
                <button className='swapbutton'>
                    Swap
                </button>
            </form>
        </div>    
    </div>
  );
};

export default Swap;
