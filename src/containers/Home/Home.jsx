import React from 'react'
import Slider from '../../components/Slider/Slider'
import NewsBlocks from '../../components/NewsBlocks/NewsBlocks'
import './Home.css'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <div className='home__wrapper'>
      <Slider/>
      <NewsBlocks/>
      <div style={{textAlign: 'center'}}><NavLink className='home__link' to='/news'>Все новости</NavLink></div>
      <form className="home__form">
        <input className='home__form-inp' type="email" name="" placeholder='Введите свой email' />
        <button className='home__form-btn'>Подписаться на новости</button>
      </form>
    </div>
  )
}

export default Home