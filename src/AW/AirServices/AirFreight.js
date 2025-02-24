import React from 'react';
import Navbar from '../Navbar';
import BackgroundImg from '../../img/flight_background.jpg';
import './AirFreight.css';
import Footer from '../Footer';
import OffcanvasExample from './OffcanvasExample';


const AirCargo = require('../../img/AirCargo.jpg');

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
            <h1>Swift & Reliable Air Freight Solutions.</h1>
          </div>
         
        </div>
      </div>

      <main className="content">
        <h1 className='Head1'>Air Cargo</h1>
      <div className='container'>
          <p className='para1'>
            Airfreight, or air cargo, is a fast and efficient method for transporting goods and materials via aircraft. Ideal for time-sensitive and high-value shipments, airfreight offers rapid delivery across international borders, making it crucial for industries like electronics, pharmaceuticals, and perishables. Although more costly than sea or land transport, its speed and reliability often make it the preferred choice for meeting tight deadlines and responding quickly to market demands. Airfreight ensures that your cargo reaches its destination swiftly and securely, maintaining the flow of global trade.
          </p>

        <div className='row'>
          <div className='col-lg-7 col-md-6 col-sm-12'>
            <section className='photocut'>
              <img src={AirCargo} alt="Air Cargo" />
              <article>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </article>
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
      <Footer />

      </div>
      </main>

    </div>
  );
}

export default AirFreight;
