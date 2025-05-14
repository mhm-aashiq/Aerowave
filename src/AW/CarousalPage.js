import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../img/BlueWorld.jpeg'
import photo2 from '../img/success.jpg'
import photo3 from '../img/tech_del.jpg'
import './CarousalPage.css'

const CarousalPage = () => {
    
  return (
    <div>
        <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo1}
          alt="First slide" 
        />
        <Carousel.Caption className="custom-caption">
          <h5 >Global Shipping Solutions</h5>
          <p>Explore our comprehensive shipping solutions that cater to businesses worldwide. From express deliveries to freight forwarding, we ensure your goods reach their destination safely and on time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo2}
          alt="Second slide" 
        />
        <Carousel.Caption className="custom-caption">
          <h5 >Customer Success Stories</h5>
          <p >Hear from our satisfied clients about their experiences with our shipping and logistics services. Learn how we've helped businesses like yours achieve operational excellence and overcome logistical challenges.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo3}
          alt="Third slide" 
        />
        <Carousel.Caption className="custom-caption">
          <h5>Optimize, streamline, accelerate</h5>
          <p>
           Integrating advanced technologies - optimizing processes, enhance coordination, reduce costs, and accelerate delivery times. Our approach ensures a smooth, agile supply chain that adapts customers and drives overall business success. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarousalPage