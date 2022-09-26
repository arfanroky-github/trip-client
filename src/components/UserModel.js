import React, { useState } from 'react';
import InputFiled from '../reuse/InputField';
import '../styles/form.css'
import Button from '../reuse/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserModel = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

   const handleUserModel = (e) => {
    e.preventDefault();

  
   const userModel = {
    fullname: e.target.fullname.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    address: e.target.address.value

   }
   if(userModel) return navigate('/trip-request', {state: userModel})


   }


   console.log(fullName, email, phone, address);

  return (
    <section className='form-container'>
    <form onSubmit={handleUserModel} className='form'>
    <h1 className='form-heading'>Let's <span className='extra-heading'>Create</span> Trip for <br/> your new <span className='extra-heading'>Vacation</span> </h1>
      <div style={{textAlign: 'center'}}>
    <InputFiled defultValue={fullName} onChangeHandle={(e) => setFullName(e.target.value)} name='fullname' required={true}  type='text' placeholder='FullName'/>  
    <InputFiled defultValue={email} onChangeHandle={(e) => setEmail(e.target.value)} name='email' required={true}  type='email' placeholder='Email'/>
    <InputFiled defultValue={phone} onChangeHandle={(e) => setPhone(e.target.value)} name='phone' required={true} type='tel' placeholder='Phone'/>  
    <InputFiled defultValue={address} onChangeHandle={(e) => setAddress(e.target.value)} name='address' required={true} type='text ' placeholder='Address'/>
    <Button type={'submit'}>Next</Button>
</div>
    </form>
    </section>
  )
}

export default UserModel