import {  useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './NewsBlocks.css'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import { useState } from 'react'
function NewsBlocks() {


  const news = useSelector(store => store.news.data)
  const [newsPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)
  const lastNewsIndex = currentPage * newsPerPage
  const firstNewsIndex = lastNewsIndex - newsPerPage
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex)

  return (
    <div className='news-list'>
      {
        currentNews.map(news_item => {
          return <div key={news_item.id} className='news__item'>
            <img src={`http://localhost:1337${news_item.attributes.image.data.attributes.formats.thumbnail.url}`} alt="" />
            <div className='news__item-caption'>
              <h4 className=''>{news_item.attributes.name}</h4>
              <p>{news_item.attributes.desc}</p>
              <div className='news-footer'>
                <div className='news-date'>
                  <span style={{margin: '-2px 5px 0 0'}}><BsFillCalendarDateFill/></span>
                  <p>{news_item.attributes.date}</p>
                </div>
                <NavLink className='news__link' to={`/news/${news_item.id}`}>Подробнее</NavLink>
              </div>
            </div>
          </div>
        })
      }

      
    </div>
  )
}

export default NewsBlocks
