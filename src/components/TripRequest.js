import React, { useRef } from 'react';
import '../styles/form.css';
import Button from '../reuse/Button';
import InputFiled from '../reuse/InputField';
import { useLocation } from 'react-router-dom';
import DropDown from './DropDown';
import CalenderDate from './Calender';
import TimeData from '../json/TimeData.json';
import VehicleType from '../json/VehicleType.json';

const TripRequest = () => {
  const location = useLocation();
  const vehicleValue = useRef('');
  const timeValue = useRef('');
  const dateValue = useRef('');


  const handleTripRequest = async(e) => {
    await e.preventDefault();

    const tripInfo = {
      trip_data: {
        full_name: location?.state?.fullname,
        email: location?.state?.email,
        phone: location?.state?.phone,
        address: location?.state?.address,
        web_url: 'https://stackoverflow.com/questions/53434094/django-rest-framework-how-to-post-date-field',
        vehicle: vehicleValue.current?.outerText,
        number_of_people: e.target.number_of_people.value,
        luggage: e.target.luggage.value,
        max_weight: e.target.max_weight.value,
        child_seat: e.target.child_seat.value,
        pickup_point: e.target.pickup_point.value,
        destination:  e.target.destination.value,
        date: dateValue.current.outerText,
        time: timeValue.current.outerText
  
      },
      stops:[
        'cummilla',
        'jessore'
      ]
    }

    console.log('vehicle', tripInfo);
  }
 

  return (
    <section className='form-container'>
<form onSubmit={handleTripRequest} className='form form-trip'>
      <h1 className='trip-heading'>Let's <span className='extra-heading'>Create</span> Trip for <br/> your new <span className='extra-heading'>Vacation</span> </h1>
      <div className='form-content'>
{/* <InputFiled required={true} name='vehicle' type='text' placeholder='Vecihle type'/>   */}
<DropDown listData={VehicleType} valueRef={vehicleValue} chooseValue={'Choose a vehicle'}/>
<CalenderDate valueRef={dateValue} />
<DropDown listData={TimeData} valueRef={timeValue} chooseValue={'Select a time'}/>
<InputFiled required={true} name='number_of_people' type='number' placeholder='Number of people'/>
<InputFiled required={true} name='luggage' type='number' placeholder='Luggage'/>  
<InputFiled required={true} name='max_weight' type='number ' placeholder='Maximum weight'/>
<InputFiled required={true} name='child_seat' type='number ' placeholder='Child seat'/>
<InputFiled required={true} name='pickup_point' type='text ' placeholder='Pick up point'/>
<InputFiled required={true} name='destination' type='text ' placeholder='Destination'/>

<InputFiled required={true} name='stops' type='text ' placeholder='Stops'/>
      </div>
<Button type='submit' >Trip Request</Button>
</form>
</section>
  )
}

export default TripRequest