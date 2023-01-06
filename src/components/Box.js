import React, { useEffect } from 'react';


function Box(props) {

  return (
    <div className='box' onClick={props.onClick}>
        {props.value}
    </div>
  )
}

export default Box;