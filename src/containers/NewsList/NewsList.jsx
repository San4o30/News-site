import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import './NewsList.css'
import Pagination from '../../components/Pagination/Pagination'
import { getNews } from '../../store/reducers/news.reducer'
import { motion } from "framer-motion";


function NewsList() {
  const news = useSelector(store => store.news.data)
  const [currentPage, setCurrentPage] = useState(1)
  const [newsPerPage] = useState(3)

  const lastNewsIndex = currentPage * newsPerPage
  const firstNewsIndex = lastNewsIndex - newsPerPage
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className='news-wrapper'>
      <h2 className='title'>Список новостей</h2>
      <div>
        {
          currentNews.map((newsItem) => {
            return <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              className='news-item'
              key={newsItem.id}
              >
              <img className='news-image' src={`http://localhost:1337${newsItem.image.url}`} alt="" />
              <div className='news-item-caption'>
                <h4 className=''>{newsItem.name}</h4>
                <p>{newsItem.shortDesc}</p>
                <div className='news_footer'>
                  <div className='news-date'>
                    <span style={{ margin: '-2px 5px 0 0' }}><BsFillCalendarDateFill /></span>
                    <p>{newsItem.date}</p>
                  </div>
                  <Link className='news__link' to={`/news/news-item/${newsItem.id}`}>Подробнее</Link>
                </div>
              </div>
            </motion.div>
          })
        }
        <Pagination
          newsPerPage={newsPerPage}
          totalNews={news.length}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default NewsList