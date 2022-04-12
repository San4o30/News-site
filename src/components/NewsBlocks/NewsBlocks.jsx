import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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

  const nav = useNavigate()

  return (
    <div className='news-list'>
      {
        currentNews.map(newsItem => {
          return <div key={newsItem.id} className='news__item'>
            <img src={`http://localhost:1337${newsItem.attributes.image.data.attributes.formats.thumbnail.url}`} alt="" />
            <div className='news__item-caption'>
              <h4 className=''>{newsItem.attributes.name}</h4>
              <p>{newsItem.attributes.shortDesc}</p>
              <div className='news-footer'>
                <div className='news-date'>
                  <span style={{margin: '-2px 5px 0 0'}}><BsFillCalendarDateFill/></span>
                  <p>{newsItem.attributes.date}</p>
                </div>
                <button className='news__link' onClick={() => nav('/news/news-item', {state: newsItem})}>Подробнее</button>
              </div>
            </div>
          </div>
        })
      }

      
    </div>
  )
}

export default NewsBlocks
