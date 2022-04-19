import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useParams } from 'react-router-dom'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import './NewsItem.css'
import edit from './editing.png'
import del from './delete.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNews, getNewsInfo } from '../../store/reducers/news.reducer'
import Modal from '../Modal/Modal'

function NewsItem() {
  const [show, setShow] = useState(false);
  const [modalInfo, setModalInfo] = useState('');


  const selectModal = (info = "") => {
    setModalInfo({
      modalInfo: info
    })
    setShow({
      show: !show,

    })
  }
  const user = useSelector(store => store.auth.user);
  const news = useSelector(store => store.news.dataItem)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsInfo(id))
  }, [dispatch,id])

  const deleteNewsItem = () => {
    if(window.confirm('Вы точно хотите удалить новость?')) {
      dispatch(deleteNews(id))
      return <Navigate to='/news' />
    }
  }

  return (
    <div>
      {news && (
        <>
          <div className="news-header">
            <img className='news-img' width='100%' src={`http://localhost:1337${news.image.url}`} alt="" />
            <h3 className='news-title'>{news.name}</h3>
            <div className='news_date'><span style={{ margin: '0 5px 5px 0' }}><BsFillCalendarDateFill /></span><p style={{ margin: '0' }}>{news.date}</p></div>
          </div>
          <div className="news-main">
            <p className='news-text'>{news.fullDesc}</p>

            {user &&
              <div className="news__links">
                <button onClick={deleteNewsItem}><img src={edit} alt="" width='30' />Удалить новость</button>
                <NavLink to={`/news/change-news/${news.id}`} className='news-change' > <img src={edit} alt="" width='30' /> Редактировать новость</NavLink>
              </div>}

          </div>
        </>
      )
      }
    </div>
  )
}

export default NewsItem