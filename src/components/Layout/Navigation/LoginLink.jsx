import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import login from './login.png'
import avatar from '../../../assets/avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/reducers/auth.reducer'
function LoginLink() {

  const user = useSelector(store => store.auth.user);
  const dispatch = useDispatch()
  const Logout = () => {
    window.confirm('Вы точно хотите выйти?')
      if(true) {
      dispatch(logout())
      } 

  }

  const [DDState, setDDState] = useState(false)
  if (!user) {
    return (
      <div>   
        <img style={{ maxWidth: '35px' }} src={login} alt="" />
        <NavLink className="toolbar-nav__link" style={{ margin: '10px' }} to="/login">Login</NavLink>
      </div>
    )
  } else {
    return (
      <div className='DDWrap' onClick={() => setDDState(!DDState)}>
        <img style={{ borderRadius: '50%', marginRight: '77px', cursor:'pointer' }} width='50' src={avatar} alt="" />
        <div className={`ddAuth ${DDState ? 'active' : ''}`}>
          <NavLink className="nav_link" to="/profile">Профиль</NavLink>
          <NavLink className="nav_link" to="/news-form">Добавить новость</NavLink>
          <button className="nav_link logout-btn" onClick={Logout}>Выйти</button>
        </div>
      </div>
    )
  }

}

export default LoginLink