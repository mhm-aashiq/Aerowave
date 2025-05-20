import React from 'react';
import Navbar from '../Navbar';
import BackgroundImg from '../../img/officer.jpg';
import './Doc.css';
import Footer from '../Footer';
import OffcanvasExample from './OffcanvasExample';

// const flight = require('../../img/flight.png');
const containership = require('../../img/portloading.png');

const Doc = () => {
  return (
    <div>
 
        <Navbar />
    
      <div className='background'>
        <img src={BackgroundImg} alt='Flight Background' />
        <div className='overlay-text'>
          <div className='textAni'>
            <h1 >We Handle the Paperwork, You Enjoy the Delivery!.</h1>
          </div>
        </div>
      </div>

      <main className="content">
        <h1 className='Head1'>AW documentation</h1>
        <div className='container'>
          <p className='para6'>
          Our documentation service is designed to simplify the shipping process for our customers. We provide comprehensive support to ensure that all necessary paperwork is accurately prepared and submitted, helping you navigate customs requirements with ease. From generating shipping labels to offering guidance on international documentation standards, our team is here to assist you every step of the way. With our user-friendly resources and dedicated customer support, you can ship with confidence, knowing that your documentation needs are in expert hands.          </p>

          <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-12'>
              <section className='photocut'>
                <img src={containership} alt="Air Cargo" />
                {/* <img src={flight} alt="Air Cargo" /> */}
               
              </section>
            </div>

            <div className='col-lg-5 col-md-6 col-sm-6'>
              <ul className="services">
                <h2>Our Services</h2>
                <hr />
                <div><OffcanvasExample /></div>
                  </ul>
          </div>
    
         </div>
        </div>
      <Footer />
      </main>
    </div>
  );
}

export default Doc;
