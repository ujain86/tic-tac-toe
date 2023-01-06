import React, { useState } from 'react';
import Box from './Box';

function Container2() {

    
    // const [state, setState] = useState(Array((gridSize.length * gridSize.length)).fill(null));
    const [state, setState] = useState(Array(9).fill(null));
    // console.log(state);
    const [flag, setFlag] = useState(true);

    const winnerGrid = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

    const checkWinner = () => {
    
        for (let indexes of winnerGrid) {
          const [a, b, c] = indexes;
          if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
            return state[a];
          }
        }
    
        return false;
      };
    
    const isWinner = checkWinner();
    

    const handleClick = (index) => {
        if(state[index] != null){
            alert('already filled');
            return;
        }
        // console.log(index);
        const copyState = state;
        copyState[index] = flag? 'X' : 'O';
        setState(copyState);
        setFlag(!flag);
      }

      const handleReset = () => {
        setState(Array(9).fill(null));
      }
      var count = 0;

      const checkCount = () => {
        // console.log('count',count);
        if((count-1) % 3 === 0){
          return true;
        }
        else{
          return false;
        }
      }

  return(
    <div className='container'>
        {isWinner?
        <>
           <h1>Hurray!! {isWinner} wins </h1>
           
           <button className='btn' onClick={handleReset}>Play Again</button>
        </>
        :
        <>
            <div>
              <h2>{flag?'X':'O'}'s turn</h2>
            </div>
            
            <div className='try'>
              {state.map((item, index) => {
                let value = count;
                count++;
                
                return (
                  <>
                  {checkCount()?
                  <>
                    <div className="break"></div>
                    <div>
                      <Box onClick={() => handleClick(value)} value={state[value]}  />
                    </div>
                  </>
                  :
                  <div key={index}>
                    <Box onClick={() => handleClick(value)} value={state[value]}  />
                  </div>
                  }
                  </>
                )
              })}
              
            </div>
        </>}

    </div>
  )
  
}

export default Container2;