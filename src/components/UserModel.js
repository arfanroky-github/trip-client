import React, { useState } from 'react';
import InputFiled from '../reuse/InputField';
import '../styles/usermodel.css'
import Button from '../reuse/Button';
import { useNavigate } from 'react-router-dom';


const UserModel = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

   const handleUserModel = (e) => {
    e.preventDefault();

  
   const userModel = {
    fullname: fullName,
    email: email,
    phone: phone,
    address: address

   }
   if(userModel) return navigate('/trip-request', {state: userModel})

   console.log(userModel);
   }



  return (
    <section className='user-model'>
    <form onSubmit={handleUserModel} className='user-model-form'>
    <h1 className='user-heading'>Provide your <span className='user-extra-heading'>credential</span></h1>
      <div className='user-info'>
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