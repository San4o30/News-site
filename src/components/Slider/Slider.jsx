import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Slider() {
  const news = useSelector(store => store.news.data)
  const [currentPage, setCurrentPage] = useState(1)
  const [newsPerPage] = useState(3)

  const lastNewsIndex = currentPage * newsPerPage
  const firstNewsIndex = lastNewsIndex - newsPerPage
  const currentNews = news.slice(firstNewsIndex, lastNewsIndex)

  return (

    <Carousel>
      {
        currentNews.map(newsItem => {
          return (
            <Carousel.Item key={newsItem.id} interval={3000}>
              <img
                className="d-block w-100"
                src={`http://localhost:1337${newsItem.image.url}`}
                alt="First slide"
              />
              <Carousel.Caption>
              <Link style={{background:'transparent', color: 'white', textDecoration: 'none'}} to={`/news/news-item/${newsItem.id}`}><h5>{newsItem.name}</h5></Link>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  )
}

export default Slider