import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Slider() {
  const news = useSelector(store => store.news.data)
  return (

    <Carousel>
      {
        news.map(news_item => {
          return (
            <Carousel.Item key={news_item.id} interval={3000}>
              <img
                className="d-block w-100"
                src={`http://localhost:1337${news_item.attributes.image.data.attributes.url}`}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>{news_item.attributes.name}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  )
}

export default Slider