import React, { useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import './NewsItem.css'
import edit from './editing.png'
import del from './delete.png'
import { useSelector } from 'react-redux'

function NewsItem() {
  const user = useSelector(store => store.auth.user);
  const location = useLocation()
  const nav = useNavigate()


  useEffect(() => {
    if (!location.state) {
      nav('/')
    }
  }, [location])


  return (
    <div>
      <div className="news-header">
        <img className='news-img' width='100%' src={`http://localhost:1337${location.state.attributes.image.data.attributes.url}`} alt="" />
        <h3 className='news-title'>{location.state.attributes.name}</h3>
        <div className='news_date'><span style={{ margin: '0 5px 5px 0' }}><BsFillCalendarDateFill /></span><p style={{ margin: '0' }}>{location.state.attributes.date}</p></div>
      </div>
      <div className="news-main">
        <p className='news-text'>{location.state.attributes.fullDesc}</p>

        {user && 
          <div className="news__links">
            <button className='news-change' onClick={() => nav('/news/change-news', { state: location.state })}> <img src={edit} alt="" width='30' /> Редактировать пост</button>
            <button className='news-delete' > <img src={del} alt="" width='30' /> Удалить пост</button>
          </div>}

      </div>
    </div>
  )
}

export default NewsItem