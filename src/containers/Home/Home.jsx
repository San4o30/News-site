import React, { useCallback, useEffect } from 'react'
import Slider from '../../components/Slider/Slider'
import NewsBlocks from '../../components/NewsBlocks/NewsBlocks'
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
import './Home.css'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getNews } from '../../store/reducers/news.reducer'
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const onClick = useCallback(() => {
    confetti({
      particleCount: 60,
      spread: 30,
    });
  }, []);
  return (
    <div className='home__wrapper'>
      <Slider />
      <NewsBlocks />
      <div style={{ textAlign: 'center' }}><NavLink className='home__link' to='/news'>Все новости</NavLink></div>
      <form className="home__form">
        <input className='home__form-inp' type="email" name="" placeholder='Введите свой email' />
        {/* <button className='home__form-btn' type='button'>Подписаться на новости</button> */}
        <button type='button' className="home__form-btn" onClick={onClick}>
          <span>🎉</span>
          <span>Подписаться на новости</span>
        </button>
      </form>
    </div>
  )
}

export default Home