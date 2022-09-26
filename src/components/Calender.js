import React, { useState } from 'react'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/calender.css';



const CalenderDate = ({valueRef}) => {
      const [date, setDate] = useState(null);
      const [hide, setHide] = useState(false);

  return (
   
<div className='calender-container' style={{ display: 'flex', flexFlow: 'column nowrap' }}>
    <div className='calender-header' onClick={() => setHide(!hide)}>
        <p ref={valueRef}>{date ? date.getDate() : 'dd'}/{date ? date.getMonth() + 1 : 'mm'}/{date? date.getFullYear() : 'yyyy'}</p>
        <button>+</button>
    </div>
{
    hide &&   <Calendar className='calender' onChange={item => setDate(item)}
    date={date} />
}
</div>
  )
}

export default CalenderDate