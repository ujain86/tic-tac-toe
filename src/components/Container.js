import React, { useState } from 'react';
import Box from './Box';
import Rows from './Rows';



function Container() {

    
    // const [state, setState] = useState(Array((gridSize.length * gridSize.length)).fill(null));
    const [state, setState] = useState(Array(9).fill(null));
    // console.log(state);
    const [flag, setFlag] = useState(true);

    // const [gridSize, setGridSize] = useState(Array(9).fill(null));
    // const [count, setCount] = useState(1);
    // console.log(state);

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

  return(
    <div className='container'>
        {isWinner?
        <>
           <h3>Hurray!! {isWinner} wins </h3>
           
           <button onClick={handleReset}>Play Again</button>
        </>
        :
        <>
            <h4>{flag?'X':'O'}'s turn</h4>
            <div className="row">
                <Box onClick={() => handleClick(0)} value={state[0]} />
                <Box onClick={() => handleClick(1)} value={state[1]} />
                <Box onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="row">
                <Box onClick={() => handleClick(3)} value={state[3]} />
                <Box onClick={() => handleClick(4)} value={state[4]} />
                <Box onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="row">
                <Box onClick={() => handleClick(6)} value={state[6]} />
                <Box onClick={() => handleClick(7)} value={state[7]} />
                <Box onClick={() => handleClick(8)} value={state[8]} />
            </div>
        </>}

    </div>
  )
  
}

export default Container;