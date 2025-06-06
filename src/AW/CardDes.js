import React from 'react'
import './CardDes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';



const CardDes = () => {

  return (
    <div className="container con1">
    

    <div className="column mt-3">
    <Gallery />

    </div>
    <div className="column mt-3">
        <p >
            Welcome to <span className='bg-info'>Aerowave Private Limited</span>, a premier global leader in shipping and logistics solutions. With a steadfast commitment to excellence and a passion for innovation, AEROWAVE stands at the forefront of the industry, offering a comprehensive suite of services designed to meet the dynamic needs of businesses worldwide. Whether you're navigating complex international trade routes or seeking reliable domestic logistics support, AEROWAVE delivers tailored solutions that optimize supply chains, streamline operations, and ensure timely delivery.
        </p>
        <p>
            Our team of seasoned professionals combines extensive industry expertise with cutting-edge technology to provide seamless end-to-end logistics solutions. From air freight and ocean freight to road transportation and warehousing, we leverage our global network and strategic partnerships to offer competitive pricing, real-time tracking, and personalized customer service.
        </p>
       
        <p>
            Explore our website to learn more about our services, industry expertise, and how AEROWAVE can help drive your business forward. Join us in redefining logistics excellence, because at AEROWAVE PVT LTD, your success is our priority.
        </p>

        <p className="pt-3">
  <Link to="/aw/aboutus">Learn More 🚢</Link>
</p>
       
    <hr />
    </div>
  </div>
  )
}

export default CardDes