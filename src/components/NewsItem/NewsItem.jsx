import React, { useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import './NewsItem.css'
function NewsItem() {

  const location = useLocation()
  const nav = useNavigate()

  useEffect(() => {
    console.log(location.state);
    if(!location.state) {
      nav('/')
    }
  }, [location])


  return (
    <div>
      <div className="news-header">
        <img className='news-img' width='100%' src={`http://localhost:1337${location.state.attributes.image.data.attributes.url}`} alt="" />
        <h3 className='news-title'>{location.state.attributes.name}</h3>
        <div className='news_date'><span style={{margin: '0 5px 5px 0'}}><BsFillCalendarDateFill /></span><p style={{margin: '0'}}>{location.state.attributes.date}</p></div>
      </div>
      <div className="news-main">
        <p className='news-text'>{location.state.attributes.fullDesc}</p>
        <div className="">
        <button className='' onClick={() => nav('/news/change-news', {state: location.state})}>Редактировать</button>
        </div>
      </div>
    </div>
  )
}

export default NewsItem