import React from 'react';
import '../styles/button.css';

const Button = ({children,  type}) => {
  return (
    <button type={type} className='btn'>
        {children}
    </button>
  )
}

export default Button