import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import './NewsItem.css'
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import edit from './editing.png'
import del from './delete.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNews, getNewsInfo } from '../../store/reducers/news.reducer'
import Modal from '../UI/Modal/Modal'
import Buttons from '../UI/Buttons/Buttons';

function NewsItem() {
  const [show, setShow] = useState(false);

  const user = useSelector(store => store.auth.user);
  const news = useSelector(store => store.news.dataItem)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsInfo(id))
  }, [dispatch, id])

  const nav = useNavigate()

  const deleteNewsItem = () => {
      dispatch(deleteNews(id))
      nav('/news')
  }

  return (
    <div>
      {news && (
        <>
          <div className="news-header">
            <img className='news-img' width='100%' src={`http://localhost:1337${news?.image.url}`} alt="" />
            <h3 className='news-title'>{news.name}</h3>
            <div className='news_date'><span style={{ margin: '0 5px 5px 0' }}><BsFillCalendarDateFill /></span><p style={{ margin: '0' }}>{news.date}</p></div>
            {news.author &&
            <div className="news-author">
              <img width='80' height='80' style={{ borderRadius: '50%', objectFit: 'cover' }} src={`http://localhost:1337${news?.author.image?.url}`} alt="" />
              <h4>{news.author.name}</h4>
              <h6>{news.author.profession}</h6>
              <p>{news.author.articles}</p>
              <div className="soc-media">
                <a href="https://facebook.com" className="icon-button facebook"><i className="icon-facebook"><FaFacebookF /></i><span></span></a>
                <a href="https://twitter.com" className="icon-button twitter"><i className="icon-twitter"><FaTwitter /></i><span></span></a>
                <a href="https://instagram.com" className="icon-button instagram"><i className="icon-instagram"><FaInstagram /></i><span></span></a>
              </div>
            </div>
            }
          </div>
          <div className="news-main">
            <p className='news-text'>{news.fullDesc}</p>

            {user &&
              <div className="news__links">
                <button className='news-delete' onClick={() => setShow(true)}><img src={del} alt="" width='30' />Удалить новость</button>
                <Modal show={show} close={() => setShow(false)}>
                  <Buttons
                    cancel={() => setShow(false)}
                    continued={deleteNewsItem}
                  />
                </Modal>
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