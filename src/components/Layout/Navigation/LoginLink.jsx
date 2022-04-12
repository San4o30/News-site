import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import login from './login.png'
import { useSelector } from 'react-redux';
function LoginLink() {
  const user = useSelector(store => store.auth.user);
  return (
      <div className="sec-center">
        <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
        <label className="for-dropdown" for="dropdown"><img style={{ maxWidth: '35px', marginRight: '5px' }} src={login} alt="" /><span>Login</span></label>
        <div className="section-dropdown">
        <NavLink className="toolbar-nav__link" to="/login">Login</NavLink>
        {user && <NavLink className="toolbar-nav__link" to="/news-form">Добавить новость</NavLink>}
        </div>
      </div>
  )
}

export default LoginLink