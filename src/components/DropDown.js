import React, { useState, useRef } from 'react'
import '../styles/dropdown.css';


const DropDown = ({valueRef, listData, chooseValue}) => {
  
  const [value, setValue] = useState('');
  const [hide, setHide]  = useState(false);

  return (
    <div className='dropdown' >
      <div className='dropdown-header' onClick={() => setHide(!hide)}>
        <p ref={valueRef}>{value ? value : chooseValue}</p>
        <button>+</button>
      </div>
     {
      hide && <>
       <ul className='dropdown-menu'>
       {
        listData.map(e => <li key={e.id} onClick={() => setValue(e.time)}>{e.time}</li>)
       }
      </ul>
      </>
     }
    </div>
  )
}

export default DropDown