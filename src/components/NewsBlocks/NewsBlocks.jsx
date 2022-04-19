import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './NewsBlocks.css'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { useState } from 'react'
function NewsBlocks() {


  const news = useSelector(store => store.news.data)
  const [newsPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)
  const lastNewsIndex = currentPage * newsPerPage
  const firstNewsIndex = lastNewsIndex - newsPerPage
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex)


  return (
    <>
      <h3 style={{margin: '40px 0 10px 0', textAlign: 'center'}}>Последние новости</h3>
      <div className='news-list'>
        {
          currentNews.map(newsItem => {
            return <div key={newsItem.id} className='news__item'>
              <img src={`http://localhost:1337${newsItem.image.formats.thumbnail.url}`} alt="" />
              <div className='news__item-caption'>
                <h4 className=''>{newsItem.name}</h4>
                <p>{newsItem.shortDesc}</p>
                <div className='news-footer'>
                  <div className='news-date'>
                    <span style={{ margin: '-2px 5px 0 0' }}><BsFillCalendarDateFill /></span>
                    <p>{newsItem.date}</p>
                  </div>
                  <Link className='news__link' to={`/news/news-item/${newsItem.id}`}>Подробнее</Link>
                </div>
              </div>
            </div>
          })
        }


      </div>
    </>
  )
}

export default NewsBlocks
