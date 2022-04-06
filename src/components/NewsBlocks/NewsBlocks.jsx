import {  useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './NewsBlocks.css'
import {BsFillCalendarDateFill} from 'react-icons/bs'
function NewsBlocks() {
  const news = useSelector(store => store.news.data)
  

  return (
    <div className='news-list'>
      {
        news.map(news_item => {
          return <div key={news_item.id} className='news__item'>
            <img src={`http://localhost:1337${news_item.attributes.image.data.attributes.formats.thumbnail.url}`} alt="" />
            <div className='news__item-caption'>
              <h4 className=''>{news_item.attributes.name}</h4>
              <p>{news_item.attributes.desc}</p>
              <div className='news-footer'>
                <div className='news-date'>
                  <span style={{margin: '-2px 5px 0 0'}}><BsFillCalendarDateFill/></span>
                  <p>{news_item.attributes.date}</p>
                  {/* <p>{
                    new Date(news_item.attributes.publishedAt).getDate()
                    }-
                  </p>
                  <p>{
                    new Date(news_item.attributes.publishedAt).getMonth()+1
                    }-
                  </p>
                  <p>{
                    new Date(news_item.attributes.publishedAt).getFullYear()  
                    }
                  </p> */}
                  
                </div>
                <NavLink className='news__link' to='/news'>Подробнее</NavLink>
              </div>
            </div>
          </div>
        })
      }

      
    </div>
  )
}

export default NewsBlocks
