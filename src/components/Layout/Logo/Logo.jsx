import React from 'react'
import './Logo.css'
import logo from './logo.png'
function Logo() {
  return (
    <div className='logo'>
        <img src={logo} alt="" className="logo__img" />
        <span>IBlog</span>
    </div>
  )
}

export default Logo