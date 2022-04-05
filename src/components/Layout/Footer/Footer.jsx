import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import insta from './icons/instagram.png'
import fb from './icons/facebook.png'
import twitter from './icons/twitter.png'
import vk from './icons/vk.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <h3>Навигация по сайту</h3>
        <NavLink to="/" className="footer-nav__link">Главная</NavLink>
        <NavLink to='/about-us' className='footer-nav__link'>О нас</NavLink>
        <NavLink to="/news" className="footer-nav__link">Новости</NavLink>
        <NavLink to="/contacts" className="footer-nav__link">Контакты</NavLink>
      </div>

      <div className="soc-networks">
        <h3>Социальные сети</h3>
        <div className='icons'>
            <a href='http://facebook.com'><img className='icons-img' src={fb} alt="" /></a>
            <a href='http://twitter.com'><img className='icons-img' src={twitter} alt="" /></a>
            <a href='http://vk.com'><img className='icons-img' src={vk} alt="" /></a>
            <a href='http://instagram.com'><img className='icons-img' src={insta} alt="" /></a>
        </div>
      </div>

      <div className="contacts">
        <h3>Контактная информация</h3>
        <p></p>
      </div>
    </div>
  )
}

export default Footer