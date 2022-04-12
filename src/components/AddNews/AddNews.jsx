import React, { useState } from 'react'
import './AddNews.css'
function AddNews() {
  const [news, setNews] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
  });

  const [file, setFile] = useState(null);


  return (
    <div className="">
      <h2>Добавить новость</h2>
      <form className="news__form">
        <div className='news__form-start'>
          <div className='news__form-group'>
            <label>Заголовок новости</label>
            <input className='news__text-field' name='title' type="text" />
          </div>
          <div className='news__form-group'>
            <label>Краткое описание</label>
            <textarea className='news__text-field' rows='6' />
          </div>
        </div>
        <div className="news__form-end">
          <div className='news__form-group'>
            <label>Полное описание новости</label>
            <textarea className='news__text-field' rows='8'/>
          </div>
        </div>
        <div className='news__img-select'>
          <input type="file" name="file" />
        </div>
      </form>
    </div>
  )
}

export default AddNews