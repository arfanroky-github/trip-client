import React, { useEffect, useRef, useState } from 'react';
import '../styles/form.css';
import Button from '../reuse/Button';
import InputFiled from '../reuse/InputField';
import { useLocation, useNavigate } from 'react-router-dom';
import DropDown from './DropDown';
import CalenderDate from './Calender';
import VehicleType from '../json/VehicleType.json';
import Axios from '../api/Axios';



const TripRequest = () => {
  const location = useLocation();
  const vehicleValue = useRef('');
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [dateTime, setDateTime] = useState('')
  const [startTimeSlot, setStartTimeSlot] = useState('');
  const [endTimeSlot, setEndTimeSlot] = useState('');

console.log(location.state);

useEffect(() => {
  const dateFormatter = async() =>{
    const dateSlot = await date?.slice(0, 10).split("/").reverse()?.join('-')
    setDateTime(dateSlot)
  }
  dateFormatter()

  const startTime = async () => {
    const start = await date?.slice(11, 17).trim()
    console.log(start);
    setStartTimeSlot(start)
  }

  startTime()

  const endTime = async () => {
    const end = await date?.slice(32, 39).trim()
    console.log(end);
   setEndTimeSlot(end)
  }

  endTime()


},[date])

  const handleTripRequest = async (e) => {
    await e.preventDefault();

    const tripCrendial = {
      trip_data: {
        full_name: location?.state?.fullname,
        email: location?.state?.email,
        phone: location?.state?.phone,
        address: location?.state?.address,
        web_url: 'https://stackoverflow.com/questions/53434094/django-rest-framework-how-to-post-date-field',
        vehicle_type: vehicleValue.current.outerText,
        number_of_people: e.target.number_of_people.value,
        luggage: e.target.luggage.value,
        max_weight: e.target.max_weight.value,
        child_seat: e.target.child_seat.value,
        pickup_point: e.target.pickup_point.value,
        destination:  e.target.destination.value,
        date: e.target.date.value,
        pickup_time: e.target.pickup_time.value,
		    drop_time: e.target.drop_time.value
           
  
      },
      stops:[
        'cummilla',
        'jessore'
      ]
    }

    const res = await Axios.post('/request-trip/', tripCrendial)
    console.log(res.data);

    if(res.data.trip_request_id){
      navigate('/congrates-page', {state: res.data.trip_request_id})
    }


  }
  



  return (
    <section className='form-container'>
<form onSubmit={handleTripRequest} className='form form-trip'>
      <h1 className='trip-heading'>Let's <span className='extra-heading'>Create</span> Trip for <br/> your new <span className='extra-heading'>Vacation</span> </h1>
      <div className='form-content'>
<DropDown listData={VehicleType} valueRef={vehicleValue} chooseValue={'Choose a vehicle'}/>
{/* <CalenderDate onchangehandle={setDate} /> */}
<InputFiled name='date' type='date' placeholder='date' required={true}/>
<InputFiled name='pickup_time' type='time' placeholder='pick_time' required={true}/>
<InputFiled name='drop_time' type='time' placeholder='Drop_time' required={true}/>

<InputFiled minValue={1} maxValue={5} required={true} name='number_of_people' type='number' placeholder='Number of people'/>
<InputFiled minValue={0} maxValue={4}  name='child_seat' type='number' placeholder='child_seat'/>  
<InputFiled minValue={0} maxValue={2}  name='luggage' type='number' placeholder='Luggage'/>  
<InputFiled minValue={0} maxValue={40}  name='max_weight' type='number' placeholder='Maximum weight 40kg'/> 
<InputFiled required={true} name='pickup_point' type='text ' placeholder='Pick up point'/>
<InputFiled required={true} name='destination' type='text ' placeholder='Destination'/>

{/* <InputFiled required={true} name='stops' type='text ' placeholder='Stops'/> */}
      </div>
<Button type='submit' >Trip Request</Button>
</form>
</section>
  )
}

export default TripRequest
