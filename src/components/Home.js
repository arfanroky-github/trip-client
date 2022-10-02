import React from 'react'
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Button from '../reuse/Button';

const Home = () => {


  return (
    <section className='container'>
        <div className='opacity'></div>
        <div className='content'>

            <h1 className='heading'>
                <span className='span'>HEY, TRAVELLER!</span>
                Let's Enjoy Your Dream Vacation.
            </h1>
           <div className='button-group'>
          <div>
            <p >Have a trip id? </p>
          <Link to='/notify-operator'>
              <Button>Notify Operator</Button>
            </Link>
          </div>
            <div>
              <p>Haven't tirp id?</p>
            <Link to='/user-model'>
            <Button>Let's Go</Button>
            </Link>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Home