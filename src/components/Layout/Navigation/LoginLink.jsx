import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import login from './login.png'
function LoginLink() {
  return (
      <div className="sec-center">
        <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
        <label className="for-dropdown" for="dropdown"><img style={{ maxWidth: '35px', marginRight: '5px' }} src={login} alt="" /><span>Login</span></label>
        <div className="section-dropdown">
        <NavLink className="toolbar-nav__link" to="/login">Login</NavLink>
        <NavLink className="toolbar-nav__link" to="/news-form">Добавить новость</NavLink>


        </div>
      </div>
      // {/* <NavLink className="toolbar-nav__link" to="/login"><img style={{ maxWidth: '35px', marginRight: '5px' }} src={login} alt="" /><span>Login</span></NavLink> */}
  )
}

export default LoginLink