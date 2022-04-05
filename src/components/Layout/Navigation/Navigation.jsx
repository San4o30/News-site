import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
function Navigation() {
  return (
    <div className='toolbar-nav'>
        <NavLink to="/" className="toolbar-nav__link">Главная</NavLink>
        <NavLink to='/about-us' className='toolbar-nav__link'>О нас</NavLink>
        <NavLink to="/news" className="toolbar-nav__link">Новости</NavLink>
        <NavLink to="/contacts" className="toolbar-nav__link">Контакты</NavLink>
    </div>
  )
}

export default Navigation