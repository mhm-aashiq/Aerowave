import React from 'react';
import Navbar from '../Navbar';
import BackgroundImg from '../../img/truck.jpg';
import './Transhipment.css';
import Footer from '../Footer';
import OffcanvasExample from './OffcanvasExample';

const transshipment = require('../../img/transhipment.jpg');

const Transhipment = () => {
  return (
    <div>
      <div className='fixed'>
        <Navbar />
      </div>
      <div className='background'>
        <img src={BackgroundImg} alt='Flight Background' />
        <div className='overlay-text'>

          <div className='textAni'>
            <h1>Transshipment With AW</h1>
           
          </div>
        </div>
      </div>

      <main className="content">
        <h1 className='Head1'>AW Transshipment</h1>
        <div className='container'>
          <p className='para1'>
          Our transshipment service at Aerowave simplifies your shipping process by transferring goods between different vessels or transport modes. This flexible solution enhances efficiency and allows us to reach global destinations that may not have direct shipping routes. With cost-effective options and real-time tracking, you can trust us to ensure your cargo arrives safely and on time. For more information or to get started, please reach out to our team!
          </p>

          <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-12'>
              <section className='photocut'>
                <img src={transshipment} alt="Air Cargo" />
               
              </section>
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
      <div className='footer'> <Footer /> </div>
    </div>
  );
}

export default Transhipment;
