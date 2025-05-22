import React from 'react';
import Navbar from '../Navbar';
import BackgroundImg from '../../img/paper.jpg';
import './Brokerage.css';
import Footer from '../Footer';
import OffcanvasExample from './OffcanvasExample';

const brokerage = require('../../img/brokerage.jpeg');

const Brokerage = () => {
  return (
    <div>
      
        <Navbar />
     
      <div className='background'>
        <img src={BackgroundImg} alt='Flight Background' />
        <div className='overlay-text'>
          <div className='textAni extra1'>
          </div>
        </div>
      </div>

      <main className="content">
        <h1 className='Head1'>AW Brokerage</h1>
        <div className='container'>
          <p className='para8'>
          Our shipping and logistics service specializes in customs brokerage, ensuring seamless import and export processes for businesses. We handle all aspects of customs clearance, including documentation, tariff classification, and compliance with local and international regulations. Our experienced team navigates complex customs procedures, minimizing delays and optimizing costs. By leveraging our extensive network and expertise, we provide efficient solutions tailored to meet the specific needs of our clients, ensuring timely delivery and enhanced supply chain efficiency          </p>

          <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-11'>
              <section className='photocut_bro'>
                <img src={brokerage} alt="Air Cargo" />
                <article>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </article>
              </section>
              <hr className='bro_hr1'/>
              <hr className='bro_hr'/>
            </div>

            <div className='col-lg-5 col-md-6 col-sm-12'>
              <ul className="services">
                <h2>Our Services</h2>
                <hr />
                <div><OffcanvasExample /></div>
              </ul>
            </div>
          </div>
        </div>
      </main>
   <Footer />
    </div>
  );
}

export default Brokerage;
