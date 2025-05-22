import React from 'react';
import Navbar from '../Navbar';
import BackgroundImg from '../../img/vessel_background.jpg';
import './SeaFreight.css';
import Footer from '../Footer';
import OffcanvasExample from './OffcanvasExample';


const SeaCargo = require('../../img/seacargo.jpg');

const SeaFreight = () => {
 

  return (
    <div>
      
        <Navbar />
      

      <div className='background'>
        <img src={BackgroundImg} alt='Flight Background' />
        <div className='overlay-text'>
          <div className='textAni'>
            <h1>Your Partner in Reliable Sea Freight and Logistics.</h1>
          </div>
          {/* <p>Discover seamless logistics with our Air Freight services.</p> */}
        </div>
      </div>

        <h1 className='Head1'>Sea Cargo</h1>
      <div className='container'>
        <div className='row'>
          <p className='para2'>
           Sea freight is a vital component of global trade, offering a reliable and cost-effective solution for transporting goods across international waters. Our sea freight services are designed to meet diverse shipping needs, from full container loads (FCL) to less-than-container loads (LCL). We provide comprehensive support throughout the shipping process, including meticulous handling, efficient customs clearance, and timely delivery. Our extensive network of global partners ensures that your cargo is managed with the highest standards of safety and efficiency. By choosing our sea freight services, you benefit from competitive rates, tailored solutions, and dedicated customer service, ensuring your goods reach their destination seamlessly and on time. </p>
          <div className='col-lg-7 col-md-6 col-sm-12'>
            <section className='photocut_sea'>
              <img src={SeaCargo} alt="Sea Cargo" />
              <article>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </article>
              </section>
              <hr className='sea_hr1'/>
              <hr className='sea_hr'/>
            </div>

          <div className='col-lg-4 col-md-6 col-sm-6'>
            <ul className="services">
              <h2>Our Services</h2>
              <hr />
                <div><OffcanvasExample /></div>
            </ul>
          </div>
    
         </div>
        </div>
      <Footer />
      
    </div>
  );
}

export default SeaFreight;
