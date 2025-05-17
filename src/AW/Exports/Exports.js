import React from 'react';
import Navbar from '../Navbar';
import BackgroundImg from '../../img/export.jpg';
import './Exports.css';
import Footer from '../Footer';
import OffcanvasExample from './OffcanvasExample';

const ExpCargo = require('../../img/exp.png');

const AirFreight = () => {
  return (
    <div>
      <div className='fixed'>
        <Navbar />
      </div>
      <div className='background'>
        <img src={BackgroundImg} alt='Flight Background' />
        <div className='overlay-text'>
          <div className='textAni'>
            <h1>Navigating Your Export Journey.</h1>
          </div>
        </div>
      </div>

      <main className="content">
        <h1 className='Head1'>AW Exports</h1>
        <div className='container'>
          <p className='para4'>
            We specialize in seamless export shipments by both air and sea, ensuring that your goods reach international markets efficiently and securely. Our dedicated team understands the complexities of global logistics and is committed to providing tailored solutions that meet your unique needs. Whether you require expedited air freight for time-sensitive cargo or cost-effective sea freight for bulk shipments, we handle every aspect of the process, from documentation and customs clearance to real-time tracking and delivery. With our extensive network of trusted carriers and freight partners, you can rest assured that your shipments will arrive on time and in perfect condition.
          </p>

          <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-12'>
              <section className='photocut'>
                <img src={ExpCargo} alt="Air Cargo" />
                <article>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </article>
              </section>
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
      </main>
    </div>
  );
}

export default AirFreight;
