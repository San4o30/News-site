import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
function Navigation() {
  return (
    <div className='toolbar-nav'>
        <NavLink className='nav__link link1' to="/">Главная</NavLink>
        <NavLink className='nav__link link2' to="/news">Новости</NavLink>
        <NavLink className='nav__link link3' to='/about-us'>О нас</NavLink>
        <NavLink className='nav__link link4' to="/contacts" >Контакты</NavLink>
        <span className="glider"></span>
    
    </div>
  )
}

export default Navigation















  /* <NavLink to="/" className="toolbar-nav__link">
        Главная
        <svg viewBox="0 0 70 36">
        <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg>
      </NavLink>
      <NavLink to="/news" className="toolbar-nav__link">
        Новости
        <svg viewBox="0 0 70 36">
          <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg>
      </NavLink>
      <NavLink to='/about-us' className='toolbar-nav__link'>
        О нас
        <svg viewBox="0 0 70 36">
          <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg>
      </NavLink>
      
      <NavLink to="/contacts" className="toolbar-nav__link">
        Контакты
        <svg viewBox="0 0 70 36">
          <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg>
      </NavLink> */