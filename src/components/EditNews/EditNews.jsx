import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getNewsInfo, putNews } from '../../store/reducers/news.reducer';
function EditNews() {
  const newsItem = useSelector(store => store.news.dataItem)
  const [news, setNews] = useState(newsItem || {
    name: "",
    shortDesc: "",
    fullDesc: "",
    date: "",
  });
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(getNewsInfo(id))
  }, [id])

  const nav = useNavigate()
  const changeHandler = e => {
    let value = e.target.value;
    setNews(newNews => {
      return {
        ...newNews,
        [e.target.name]: value,
      };
    });
  }
  const submitHandler = e => {
    e.preventDefault();
    dispatch(putNews({ news, id })).then(() => nav('/news'));
  }
  return (
    <div className="">

      <h2>Редактировать новость</h2>
      <form onSubmit={submitHandler} className="news__form">
        <div className='news__form-start'>
          <div className='news__form-group'>
            <label>Заголовок новости</label>
            <input
              className='news__text-field'
              name='name'
              type="text"
              value={news.name}
              placeholder='Введите заголовок'
              onChange={changeHandler} />
          </div>
          <div className='news__form-group'>
            <label>Краткое описание</label>
            <textarea
              className='news__text-field'
              rows='6'
              placeholder='Введите краткое описание новости'
              name='shortDesc'
              value={news.shortDesc}
              onChange={changeHandler} />
          </div>
        </div>
        <div className="news__form-end">
          <div className='news__form-group'>
            <label>Полное описание новости</label>
            <textarea
              className='news__text-field'
              rows='8'
              placeholder='Введите полное описание новости'
              name='fullDesc'
              value={news.fullDesc}
              onChange={changeHandler} />
          </div>
          <div className='news__form-group'>
            <label>Дата опубликования</label>
            <input
              className='news__text-field'
              type='date'
              name='date'
              value={news.date}
              onChange={changeHandler} />
          </div>
        </div>
        <div className=''>
          <button className='change-btn add-btn'>Редактировать новость</button> :
        </div>
      </form>
    </div>
  )
}

export default EditNews