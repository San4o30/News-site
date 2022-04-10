import React from 'react'
import './AddNews.css'
function AddNews() {
  return (
    <div className="">
      <form className="news__form">
        <div className='news__form-group'>
          <label htmlFor="title">Заголовок новости</label>
          <input type="text" id='title'  placeholder='Введите заголовок'/>
        </div>
      </form>
    </div>
  )
}

export default AddNews