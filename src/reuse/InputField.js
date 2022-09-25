import React from 'react'
import '../styles/inputfield.css'

const InputField = ({type, placeholder}) => {
  return (
    <div className='input-box'>
        <input className='input-field' type={type} placeholder={placeholder} />
    </div>
  )
}

export default InputField