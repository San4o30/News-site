import React from 'react'
import './AddNews.css'
function AddNews() {
  return (
    <div className="">
      <h2>Добавить новость</h2>
      <form className="news__form">
        <div className='news__form-group'>
          <label htmlFor="title">Заголовок новости</label>
          <input type="text" id='title' placeholder='Введите заголовок'/>
        </div>
        <div className='news__form-group'>
          <label htmlFor="title">Краткое описание</label>
          <input type="text" id='title' placeholder='Введите краткое описание новости'/>
        </div>
      </form>
    </div>
  )
}

export default AddNews