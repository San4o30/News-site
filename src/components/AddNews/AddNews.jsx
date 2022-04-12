import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postNews } from '../../store/reducers/news.reducer';

import './AddNews.css'
function AddNews() {
  const [news, setNews] = useState({
    name: "",
    shortDesc: "",
    fullDesc: "",
  });

  const [file, setFile] = useState(null);

  const changeHandler = e => {
    let value = e.target.value;
    setNews(news => {
      return {
        ...news,
        [e.target.name]: value,
      };
    });
  }

  const onFileSelect = e => {
    setFile(e.target.files[0])
  }

  const store = useSelector((store) => store);
  const user = store.auth.user;
  const dispatch = useDispatch();


  const submitHandler = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('files', file);

    axios
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`
        },
      })
      .then((res) => {
        const data = {
          data: {
            ...news,
            image: res.data,
          },
        };

        dispatch(postNews(data));
      });
  }

  return (
    <div className="">
      <h2>Добавить новость</h2>
      <form onSubmit={submitHandler} className="news__form">
        <div className='news__form-start'>
          <div className='news__form-group'>
            <label>Заголовок новости</label>
            <input
              className='news__text-field'
              name='name'
              type="text"
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
              onChange={changeHandler} />
          </div>
        </div>
        <div className='news__img-select'>
          <input type="file" name="file" onChange={onFileSelect} />
        </div>
        <div className='news__img-select'>
          <button > Добавить новость</button>
        </div>
      </form>
    </div>
  )
}

export default AddNews