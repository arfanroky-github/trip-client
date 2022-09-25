import React from 'react';
import '../styles/form.css';
import Trip from '../images/trip.jpg';
import Button from '../reuse/Button';
import InputFiled from '../reuse/InputField';

const TripRequest = () => {
  return (
    <section className='form-container'>
    <div className='form-img trip-img'>
        <img src={Trip} alt=''/>
    </div>
<form className='form form-trip'>
<InputFiled type='text' placeholder='Vecihle type'/>  
<InputFiled type='number' placeholder='People'/>
<InputFiled type='number' placeholder='Luggage'/>  
<InputFiled type='number ' placeholder='Maximum weight'/>
<InputFiled type='number ' placeholder='Child seat'/>
<InputFiled type='text ' placeholder='Pick up point'/>
<InputFiled type='text ' placeholder='Destination'/>
<InputFiled type='text ' placeholder='Stops'/>
<InputFiled type='number ' placeholder='Date'/>
<Button>Trip Request</Button>
</form>
</section>
  )
}

export default TripRequest