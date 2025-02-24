import React, { useState, useCallback, useEffect } from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar1 from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo1 from '../img/LOGO.png';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  // Toggle navbar collapse
  const toggleNavbar = () => {
    setExpanded(prev => !prev);
  };

  // Toggle services dropdown
  const handleDropdownVisibility = (visible) => {
    setServicesDropdown(visible);
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest('.dropdown-toggle')) {
      setServicesDropdown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Navbar1 expand="lg" className="bg-body-dark fixed-top">
      <Container fluid>
        <Link to='/'>
          <Navbar1.Brand>
            <img src={logo1} alt="Logo" />
          </Navbar1.Brand>
        </Link>
        <Navbar1.Toggle
          aria-controls="navbarScroll"
          onClick={toggleNavbar}
          className={`custom-toggler ${expanded ? 'collapsed' : ''}`}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar1.Toggle>
        <Navbar1.Collapse id="navbarScroll" className={`${expanded ? 'show' : ''}`}>
          <Nav className="ms-auto my-2 my-lg-0"  navbarScroll>
          <Link to='/' className="nav-link text-white">Home</Link>
            <div
              className="nav-item dropdown"
              onMouseEnter={() => handleDropdownVisibility(true)}
              onMouseLeave={() => handleDropdownVisibility(false)}
            >
              <span
                className="nav-link text-white dropdown-toggle"
                onClick={() => handleDropdownVisibility(prev => !prev)}
              >
                Services⤵️
              </span>
              
              <div className={`dropdown-menu ${servicesDropdown ? 'show' : ''}`}>
                <ul>
                  <li><Link to="/aw/AirServices/AirFreight" className="dropdown-item">Air Freight✈️</Link></li>
                  <li><Link to="/aw/SeaServices/SeaFreight" className="dropdown-item">Sea Freight⚓</Link></li>
                  <li><Link to="/aw/Exports/Exports" className="dropdown-item">Exports📤</Link></li>
                  <li><Link to="/aw/DocServices/Doc" className="dropdown-item">Documentation📑</Link></li>
                  <li><Link to="/aw/transhipServices/Transhipment" className="dropdown-item">Transhipment🔁</Link></li>
                  <li><Link to="/aw/Brokerage/Brokerage" className="dropdown-item">Custom Brokerage🛃</Link></li>
                  <li><Link to="/aw/project" className="dropdown-item">Projects🗂️</Link></li>
                  {/* Add more dropdown items as needed */}
                </ul>
              </div>
            </div>
            <Link to="/aw/aboutus" className="nav-link text-white">About Us</Link>
            <Link to="/aw/contactus" className="nav-link text-white">Contact Us</Link>
          </Nav>
        </Navbar1.Collapse>
      </Container>
    </Navbar1>
  );
};

export default Navbar;
