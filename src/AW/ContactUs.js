import React from 'react';
import './ContactUs.css'; 
import Navbar from './Navbar';
import Footer from './Footer';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';


const ContactUs = () => {
  return (
    <div>
      <div className='fixed'>
            <Navbar />
      </div>
      <div className="container">
        <div className="map">
          <iframe 
          title='Google Map'
            src="https://maps.google.com/maps?q=aerowave+maldives&output=embed" 
            width="100%" 
            height="450" 
            frameBorder="0" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0">
          </iframe>
        </div>
        <br/>
          <div className='textAni'>
          <h1>Navigating your logistics challenges with precision.</h1>
          </div>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <h1>Contact Us</h1>
            <p className="intro text-primary">We'd Love to Hear from You!</p>
            <p className="intro">Whether you have a question, a suggestion, or just want to say hello, our team is here to assist you. Please use the form below to get in touch with us. We aim to respond to all inquiries within 24 hours.</p>
            <div className="contact-info ">
              <br />
              <h1>Contact Information</h1>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <br />
              <p><strong>📍 Our Office</strong><br />
                1st Floor, M.Randhoo,<br />
                Handhuvaree Hingun, Malé<br />
                Republic of Maldives</p>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <p><strong>🕒 Business Hours</strong><br />
                Sunday - Thursday:<br /> 9:30 AM - 5:30 PM<br />
                <hr/>
                Saturday: 9:30 AM - 3:30 PM<br />
                <hr/>
                Friday: Closed</p>
                </div>
            </div>
            <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <p><strong>📞 Phone</strong><br />
                  (+960) 910-6006<br />
                  (+960) 944-2123<br />
                  (+960) 968-1231</p>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
              <p><strong>📧 Email</strong><br />
              csv@aerowavemv.com</p>
                </div>
                </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 end'>
           
            <div className="follow-us">
              <h1>Follow Us</h1>
             
              <p>Stay connected with us through social media for the latest updates and special offers.</p>
              <ul className="list-unstyled d-flex justify-content-center align-items-center">
  <li className="ms-3">
    <a className="link-dark d-flex" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <BsInstagram size={20} />
    </a>
  </li>
  <li className="ms-3">
    <a className="link-dark d-flex" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <BsFacebook size={20} />
    </a>
  </li>
  <li className="ms-3">
    <a className="link-dark d-flex" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <BsLinkedin size={20} />
    </a>
  </li>
  <li className="ms-3">
    <a className="link-dark d-flex" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <BsTwitterX size={20} />
    </a>
  </li>
</ul>

            </div>
            <br />
            <br />
            <div className="faq">
              <h1>FAQ</h1>
              <br />
              <p><strong>Q: How can I reach customer support?</strong><br />
                A: You can reach our customer support by calling us at +(960) 2123, or emailing us at csv@aerowavemv.com.</p>
                <hr/>
              <p><strong>Q: What are your business hours?</strong><br />
                A: Our business hours are Monday to Thursday from 9:30 AM to 5:30 PM, Saturday from 9:30 AM to 3:30 PM and Friday Closed.</p>
                <hr/>
              <p><strong>Q: Where is your office located?</strong><br />
                A: Our office is located at 1st Floor, M.Randhoo,
                Handhuvaree Hingun, Malé
                Republic of Maldives.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
