import React from 'react'
import '../styles/inputfield.css'

const InputField = ({type, placeholder, required, name, onChangeHandle, defaultValue}) => {
  return (
   
        <input defaultValue={defaultValue} onChange={onChangeHandle} required={required} name={name} className='input-field' type={type} placeholder={placeholder} />

  )
}

export default InputField;