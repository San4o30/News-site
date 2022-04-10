import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import { FaInstagram, FaTwitter,FaFacebookF, FaGithub } from "react-icons/fa";

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
        {/* <div className='icons'>
            <a href='http://facebook.com'><img className='icons-img' src={fb} alt="" /></a>
            <a href='http://twitter.com'><img className='icons-img' src={twitter} alt="" /></a>
            <a href='http://vk.com'><img className='icons-img' src={vk} alt="" /></a>
            <a href='http://instagram.com'><img className='icons-img' src={insta} alt="" /></a>
        </div> */}
        <div className="wrapper">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <span><FaFacebookF/></span>
          </li>
          <li className="icon twitter">
            <span className="tooltip">Twitter</span>
            <span><FaTwitter/></span>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <span><FaInstagram/></span>
          </li>
          <li className="icon github">
            <span className="tooltip">Github</span>
            <span><FaGithub/></span>
          </li>
        </div>
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