import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'
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
  const nav = useNavigate()


  return (
    <div className='news-wrapper'>
      <h2>Список новостей</h2>
      <div>
        {
          currentNews.map(newsItem => {
            return <div key={newsItem.id} className='news-item'>
              <img src={`http://localhost:1337${newsItem.attributes.image.data.attributes.url}`} alt="" />
              <div className='news-item-caption'>
                <h4 className=''>{newsItem.attributes.name}</h4>
                <p>{newsItem.attributes.shortDesc}</p>
                <div className='news-footer'>
                  <div className='news-date'>
                    <span style={{ margin: '-2px 5px 0 0' }}><BsFillCalendarDateFill /></span>
                    <p>{newsItem.attributes.date}</p>
                  </div>
                  <button className='news__link' onClick={() => nav('news-item', {state: newsItem})}>Подробнее</button>
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