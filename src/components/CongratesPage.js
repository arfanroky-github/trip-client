import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Axios from '../api/Axios'
import '../styles/congrates.css'
import { useEffect, useState , useRef} from 'react'
import Button from '../reuse/Button'

const CongratesPage = () => {
    const location = useLocation();
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);
  
    function copyToClipboard(e) {
      textAreaRef.current.select();
      document.execCommand('copy');
      // This is just personal preference.
      // I prefer to not show the whole text area selected.
      e.target.focus();
      setCopySuccess('Copied!');
    };

  return (
    <div className='congrates-container'>
      <div className='congrates-content'>
      <h1>Congratualtions</h1>
        <h5>you have successfully requesed a trip with us</h5>
        <span>
            here is your trip request id and we have sent a mail as well.

        </span>
      <form className='copyboard'>
        <textarea
          ref={textAreaRef}
          value={location?.state}
        />
      </form>
      <div style={{textAlign: 'center'}}>
                <Link to='/'>
            <Button>
            Back to Home
            </Button>
                </Link>
          <Button onClickHandle={copyToClipboard}>Copy</Button> 
        </div>
        <p style={{textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: 'gray'}}> {copySuccess}</p>
      </div>
    </div>
  )
}

export default CongratesPage