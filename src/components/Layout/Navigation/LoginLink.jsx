import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import login from './login.png'
function LoginLink() {
  return (
    <div className="login" style={{display: 'flex'}}>
        <NavLink className="toolbar-nav__link" to="/login"><img style={{maxWidth:'35px', marginRight:'5px'}} src={login} alt="" /><span>Login</span></NavLink>
    </div>
  )
}

export default LoginLink