import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsInfo, postNews, putNews } from '../../store/reducers/news.reducer';

import './AddNews.css'
import { useParams } from 'react-router-dom';
function AddNews({ edit = false }) {
  const newsItem  = useSelector(store => store.news.dataItem)
  const [news, setNews] = useState(newsItem || {
    name: "",
    shortDesc: "",
    fullDesc: "",
    date: ""
  });


  const { id } = useParams()

  useEffect(() => {
    if (edit) {
      dispatch(getNewsInfo(id))
    }
  }, [id])

  const [file, setFile] = useState(null);

  const changeHandler = e => {
    let value = e.target.value;
    setNews(newNews => {
      return {
        ...newNews,
        [e.target.name]: value,
      };
    });
  }

  const onFileSelect = e => {
    setFile(e.target.files[0])
  }

  const user = useSelector(store => store.auth.user);

  const dispatch = useDispatch();


  const submitHandler = e => {
    e.preventDefault();

    if (edit) {
      dispatch(putNews(news,id));
    } else {
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
        }

        )

    }
  }
  return (
    <div className="">
      {edit?
        <h2>Редактировать новость</h2>:
        <h2>Добавить новость</h2>
      }
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
            <label>Дата</label>
            <input
              className='news__text-field'
              type='date'
              name='date'
              value={news.date}
              onChange={changeHandler} />
          </div>
        </div>
        {!edit &&
          <div className='news__img-select'>
            <input type="file" name="file" onChange={onFileSelect} />
          </div>
        }

        <div className=''>
          {edit ?
            <button className='add-btn'>Редактировать новость</button>:
            <button className='add-btn'>Добавить новость</button>
          }
        </div>
      </form>
    </div>
  )
}

export default AddNews