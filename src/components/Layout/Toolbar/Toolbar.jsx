import React from 'react'
import Logo from '../Logo/Logo'
import LoginLink from '../Navigation/LoginLink'
import Navigation from '../Navigation/Navigation'
import './Toolbar.css'
function Toolbar() {
  return (
    <header className='toolbar'>
        <Logo/>
        <Navigation/>
        <LoginLink/>
    </header>
  )
}

export default Toolbar