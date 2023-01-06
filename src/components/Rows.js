import React, { useState } from 'react';
import Box from './Box';

function Rows(props) {

    const [flag, setFlag] = useState(true);
    
  return (
    <div className='rows'>
        {/* {props.gridSize.map((item, index) => {
            return <Box key={index} />
        })} */}
    </div>
  )
}

export default Rows;