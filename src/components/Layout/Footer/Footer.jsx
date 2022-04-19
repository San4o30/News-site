import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import { FaInstagram, FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";

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
        <a href="https://facebook.com" className="icon-button facebook"><i className="icon-facebook"><FaFacebookF/></i><span></span></a>
        <a href="https://twitter.com" className="icon-button twitter"><i className="icon-twitter"><FaTwitter/></i><span></span></a>
        <a href="https://instagram.com" className="icon-button instagram"><i className="icon-instagram"><FaInstagram/></i><span></span></a>
        <a href="https://github.com" className="icon-button git-hub"><i className="icon-git-hub"><FaGithub/></i><span></span></a>
      </div>

      <div className="contacts">
        <h3>Контактная информация</h3>
        <a href='#'>Телефон +996 (312) 66-01-88</a>
        <a href='#'>Рекламный отдел +996 (312) 68-08-51</a>
        <a href="#">Почта info@iblog.kg</a>
      </div>
    </div>
  )
}

export default Footer