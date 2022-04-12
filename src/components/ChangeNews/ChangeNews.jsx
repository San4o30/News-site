import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './ChangeNews.css'
function ChangeNews() {


  let location = useLocation()
  const news = location.state
  const [newsTitle, setNewsTitle] = useState(news.attributes.name)
  const [newsShortDesc, setNewsShortDesc] = useState(news.attributes.shortDesc)
  const [newsFullDesc, setNewsFullDesc] = useState(news.attributes.fullDesc)



  return (
    <div className="change-news">
      <h2>Редактирование новости</h2>
      <form className="news__form">
        <div className='news__form-start'>
          <div className='news__form-group'>
            <label>Заголовок новости</label>
            <input className='news__text-field' type="text" value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)} />
          </div>
          <div className='news__form-group'>
            <label>Краткое описание</label>
            <textarea className='news__text-field' rows='6' value={newsShortDesc} onChange={(e) => setNewsShortDesc(e.target.value)} />
          </div>
        </div>
        <div className="news__form-end">
          <div className='news__form-group'>
            <label>Полное описание новости</label>
            <textarea className='news__text-field' rows='8' value={newsFullDesc} onChange={(e) => setNewsFullDesc(e.target.value)} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChangeNews