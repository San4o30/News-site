import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import './NewsList.css'
import Pagination from '../../components/Pagination/Pagination'

function NewsList() {
  const news = useSelector(store => store.news.data)

  const [currentPage, setCurrentPage] = useState(1)
  const [newsPerPage] = useState(3)

  const lastNewsIndex = currentPage * newsPerPage
  const firstNewsIndex = lastNewsIndex - newsPerPage
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className='news-wrapper'>
      <h2>Список новостей</h2>
      <div>
        {
          currentNews.map(news_item => {
            return <div key={news_item.id} className='news-item'>
              <img src={`http://localhost:1337${news_item.attributes.image.data.attributes.url}`} alt="" />
              <div className='news-item-caption'>
                <h4 className=''>{news_item.attributes.name}</h4>
                <p>{news_item.attributes.desc}</p>
                <div className='news-footer'>
                  <div className='news-date'>
                    <span style={{ margin: '-2px 5px 0 0' }}><BsFillCalendarDateFill /></span>
                    <p>{news_item.attributes.date}</p>
                  </div>
                  <NavLink className='news__link' to='/news-item'>Подробнее</NavLink>
                </div>
              </div>
            </div>
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