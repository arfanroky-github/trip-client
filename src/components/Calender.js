import React, { useState } from 'react'
import { Datepicker } from '@mobiscroll/react';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";


const CalenderDate = ({onchangehandle}) => {

      const [hide, setHide] = useState(false);


      const handleValue = async (e) => {
        await onchangehandle(e.valueText.slice(0, 19));
      }

  return (
<div className='calender-container' style={{ display: 'flex', flexFlow: 'column nowrap' }}>
    <div className='calender-header' onClick={() => setHide(!hide)}>
        {/* <p >{date ? date.getDate() : 'dd'}/{date ? date.getMonth() + 1 : 'mm'}/{date? date.getFullYear() : 'yyyy'}</p> */}
        <button>+</button>
    </div>
    <div  className='calendar-content'>
{
    hide &&  <Datepicker 
    controls={['calendar', 'timegrid']}
    select="range"
    display="inline"
    touchUi={true}
    onChange={handleValue}
/>
}
    </div>
</div>
  )
}

export default CalenderDate