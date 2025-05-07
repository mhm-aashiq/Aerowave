import React from 'react'
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleInstagramClick = () => {
    // Handle click for Instagram icon
    window.open('https://www.instagram.com');
  };

  const handleFacebookClick = () => {
    // Handle click for Facebook icon
    window.open('https://www.facebook.com/aerowavemv/');
  };

  const handleLinkedinClick = () => {
    // Handle click for LinkedIn icon
    window.open('https://mv.linkedin.com/company/aerowave');
  };

  const handleTwitterClick = () => {
    // Handle click for Twitter icon
    window.open('https://www.twitter.com');
  };



  return (
<div className="container">
  <footer className="py-5">

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p className='fs-6 fs-md-2'>&copy; {currentYear} AEROWAVE Private Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex justify-content-center align-items-center">
  <li className="ms-3">
    <button className="link-dark d-flex border-0 bg-transparent" onClick={handleInstagramClick}>
      <BsInstagram size={20} />
    </button>
  </li>
  <li className="ms-3">
    <button className="link-dark d-flex border-0 bg-transparent" onClick={handleFacebookClick}>
      <BsFacebook size={20} />
    </button>
  </li>
  <li className="ms-3">
    <button className="link-dark d-flex border-0 bg-transparent" onClick={handleLinkedinClick}>
      <BsLinkedin size={20} />
    </button>
  </li>
  <li className="ms-3">
    <button className="link-dark d-flex border-0 bg-transparent" onClick={handleTwitterClick}>
      <BsTwitterX size={20} />
    </button>
  </li>
</ul>

    </div>
  </footer>
</div>

  )
}

export default Footer