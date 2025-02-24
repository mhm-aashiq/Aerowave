import React from 'react'
import Navbar from './Navbar'
import CarousalPage from './CarousalPage'
import SwiperSlider from './SwiperSlider'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css';
import Sections from './Sections'
import CardDes from './CardDes'
import LetterHead from './LetterHead'


const Home = () => {

  return (
    <div>
      <Navbar />
      <CarousalPage   
        autoPlay={true}
        interval={5000}
        controls={false}
        indicators={false}/>
        <LetterHead />
        {/* <SwiperSlider /> */}
        <CardDes />

      <Sections />
      <Footer />
    </div>
  )
}

export default Home