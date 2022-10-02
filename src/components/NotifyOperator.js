import React, { useRef } from 'react'
import Axios from '../api/Axios';
import Button from '../reuse/Button';
import '../styles/notify.css';

const NotifyOperator = () => {
    const idRef = useRef('');
    const handleNotify = async(e) => {
        await e.preventDefault()
        const res = await Axios.post('/notify-operator/', {id: idRef.current.value})
        console.log(res.data);
    }

  return (
    <div className='notify-container'>
        <div className='notify-content'>
            <p>If your trip request status is not updating more than 24 hours,  to notify our operator <span>Provide your trip request id</span></p>
            <input name='id' ref={idRef} type='text'/>
            <Button onClickHandle={handleNotify} type='submit' >Notify</Button>
         
        </div>
    </div>
  )
}

export default NotifyOperator