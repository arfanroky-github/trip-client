import React, { useEffect } from 'react'
import InputFiled from '../reuse/InputField';
import User from '../images/user.jpg';
import '../styles/form.css'
import Button from '../reuse/Button';
import { json, Link } from 'react-router-dom';
import axios from 'axios';

const UserModel = () => {


   const tirpInfo = {
     trip_data: {
       full_name: 'john doe',
       email: 'john@gmail.com',
       phone: '345973495034',
       address: 'dhaka',
       web_url: 'https://stackoverflow.com/questions/53434094/django-rest-framework-how-to-post-date-field',
       vehicle: 'ac',
       number_of_people: '2',
       luggage: '6',
       max_weight: '480',
       child_seat:"4",
     pickup_point:"dhaka",
     destination:"chittagong",
     date: "2015-02-11",

     },
     stops:[
       'cummilla',
       'jessore'
     ]
   }


  return (
    <section className='form-container'>
        <div className='form-img'>
            <img src={User} alt=''/>
        </div>
    <form className='form'>
    <InputFiled type='text' placeholder='Username'/>  
    <InputFiled type='email' placeholder='Email'/>
    <InputFiled type='tel' placeholder='Phone'/>  
    <InputFiled type='text ' placeholder='Address'/>
    <Link to='/trip-request'>
    <Button>Next</Button>
    </Link>

    </form>
    </section>
  )
}

export default UserModel