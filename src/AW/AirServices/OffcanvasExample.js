import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const OffcanvasExample = () => {
  const [showDelivery, setShowDelivery] = useState(false);
  const [showGlobal, setShowGlobal] = useState(false);
  const [showScheduling, setShowScheduling] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showTemperature, setShowTemperature] = useState(false);
  const [showTracking, setShowTracking] = useState(false);
  const [showClearance, setShowClearance] = useState(false);
  const [showFlexibility, setShowFlexibility] = useState(false);
  const [showExpress, setShowExpress] = useState(false);
  const [showDoor, setShowDoor] = useState(false);
   
  const handleCloseDelivery = () => setShowDelivery(false);
  const handleShowDelivery = () => setShowDelivery(true);

  const handleCloseGlobal = () => setShowGlobal(false);
  const handleShowGlobal = () => setShowGlobal(true);

  const handleCloseScheduling = () => setShowScheduling(false);
  const handleShowScheduling = () => setShowScheduling(true);

  const handleCloseSecurity = () => setShowSecurity(false);
  const handleShowSecurity = () => setShowSecurity(true);

  const handleCloseTemperature = () => setShowTemperature(false);
  const handleShowTemperature = () => setShowTemperature(true);

  const handleCloseTracking = () => setShowTracking(false);
  const handleShowTracking = () => setShowTracking(true);

  const handleCloseClearance = () => setShowClearance(false);
  const handleShowClearance = () => setShowClearance(true);

  const handleCloseFlexibility = () => setShowFlexibility(false);
  const handleShowFlexibility = () => setShowFlexibility(true);

  const handleCloseExpress = () => setShowExpress(false);
  const handleShowExpress = () => setShowExpress(true);

  const handleCloseDoor = () => setShowDoor(false);
  const handleShowDoor = () => setShowDoor(true);



  return (
    <div className=''>
       <style>
          {`
            /* General Offcanvas Half-Cut Style */
            .offcanvas-start.half-cut::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              text-align: justify;
            }

            .offcanvas-start.half-cut {

              overflow: hidden;
            }

            /* Variant backgrounds */
            .offcanvas-start.bg-primary.half-cut::before {
              background: linear-gradient(to bottom right, #0d6efd 50%,rgb(100, 162, 255) 50%);
            }

            .offcanvas-start.bg-success.half-cut::before {
              background: linear-gradient(to bottom right, #198754 50%,rgb(97, 167, 134) 50%);
            }

            .offcanvas-start.bg-danger.half-cut::before {
              background: linear-gradient(to bottom right, #dc3545 50%,rgb(218, 112, 122) 50%);
            }

            .offcanvas-start.bg-warning.half-cut::before {
              background: linear-gradient(to bottom right, #ffc107 50%,rgb(255, 213, 86) 50%);
            }

            .offcanvas-start.bg-info.half-cut::before {
              background: linear-gradient(to bottom right, #0dcaf0 50%,rgb(74, 214, 241) 50%);
            }

            .offcanvas-start.bg-secondary.half-cut::before {
              background: linear-gradient(to bottom right, #6c757d 50%,rgb(143, 155, 165) 50%);
            }

            .offcanvas-start.bg-dark.half-cut::before {
              background: linear-gradient(to bottom right, #212529 50%,rgb(49, 51, 54) 50%);
            }

            /* Optional content styles inside the offcanvas */
            .offcanvas-title {
              font-weight: bold;
              text-transform: uppercase;
              font-size: 1.5rem;
              
            }

            .offcanvas-body div {
              font-size: 1.1rem;
              text-transform: uppercase;
              font-weight: 500;
              line-height: 1.6;
              text-align: justify;
            }

            .offcanvas .btn a {
              text-decoration: none;
            }

            .offcanvas .btn a:hover {
              text-decoration: underline;
            }
          .custom-offcanvas-header .btn-close {
            background-color:white;
            margin-bottom:10px;
          }
          `}
        </style>




    {/* fast delivery */}
       <Button variant="primary" size="sm" onClick={handleShowDelivery}  className="m-2 fs-6" >
        Fast Delivery
      </Button>

      <Offcanvas
        show={showDelivery}
        onHide={handleCloseDelivery}
        placement="start"
        className="bg-primary half-cut"
      >
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <Offcanvas.Title className="text-uppercase fs-6 fw-bold text-white">
            Fast Delivery
            <hr className="bg-light" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-uppercase text-white fs-6 ">
            Airfreight provides the quickest shipping option, significantly reducing transit times compared to sea or land transport.
          </div>
          <Button className="mt-3" variant="light" size="sm">
            <Link to="/aw/contactus" className="text-primary fw-bold text-decoration-none">
              Contact Us
            </Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

    {/*  Global Reach */}
      <Button variant="success" size='sm' onClick={handleShowGlobal} className='m-2 fs-6'>
        Global Reach 
      </Button>
      <Offcanvas show={showGlobal} onHide={handleCloseGlobal} placement="start" className="bg-success half-cut">
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <Offcanvas.Title className='text-uppercase fs-6 text-white'>Global Reach <hr className="bg-light" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 '>
            Capable of transporting goods to and from virtually any part of the world, facilitating international trade and global supply chains.
          </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-success fw-bold text-decoration-none">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Reliable Scheduling */}
      <Button variant="secondary" size='sm' onClick={handleShowScheduling} className='m-2 fs-6'>
        Reliable Scheduling 
      </Button>
      <Offcanvas show={showScheduling} onHide={handleCloseScheduling} placement="start" className="bg-secondary half-cut">
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <Offcanvas.Title className='text-uppercase text-white fw-bold fs-6'>Reliable Scheduling  <hr className="bg-light" /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-secondary text-white fs-6'>
          Regular and frequent flight schedules ensure consistent and predictable delivery times. </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-secondary fw-bold text-decoration-none">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  High Security */}
      <Button variant="danger" size='sm' onClick={handleShowSecurity} className='m-2 fs-6'>
        High Security 
      </Button>
      <Offcanvas show={showSecurity} onHide={handleCloseSecurity} placement="start"  className="bg-danger half-cut">
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <Offcanvas.Title className='text-uppercase text-white fw-bold fs-6'>High Security<hr className="bg-light"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 fw-bold '>
            Capable of transporting goods to and from virtually any part of the world, facilitating international trade and global supply chains.
          </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-danger fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Temperature Control */}
      <Button variant="warning" size='sm' onClick={handleShowTemperature} className='m-2 fs-6'>
        Temperature Control 
      </Button>
      <Offcanvas show={showTemperature} onHide={handleCloseTemperature} placement="start" className="bg-warning half-cut"> 
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <Offcanvas.Title className='text-uppercase text-white fw-bold fs-6'>Temperature Control <hr className="bg-light"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 fw-bold'>
          Specialized cargo holds and containers for temperature-sensitive items, ideal for pharmaceuticals, perishable goods, and other items requiring controlled environments.  </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-warning fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Real-Time Tracking */}
      <Button variant="info" size='sm' onClick={handleShowTracking} className='m-2 fs-6'>
        Real-Time Tracking 
      </Button>
      <Offcanvas show={showTracking} onHide={handleCloseTracking} placement="start" className="bg-info half-cut">
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <Offcanvas.Title className='text-uppercase text-white fw-bold fs-6'>Real-Time Tracking <hr className="bg-light"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 fw-bold'>
          Advanced tracking systems provide real-time updates on the location and status of shipments, offering visibility and control. </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-info fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Customs Clearance */}
      <Button variant="dark" size='sm' onClick={handleShowClearance} className='m-2 fs-6'>
        Customs Clearance 
      </Button>
      <Offcanvas show={showClearance} onHide={handleCloseClearance} placement="start" className="bg-dark half-cut">
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <Offcanvas.Title className='text-uppercase text-white fw-bold fs-6'>Customs Clearance<hr className="bg-light"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 fw-bold'>
            Capable of transporting goods to and from virtually any part of the world, facilitating international trade and global supply chains.
          </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-dark fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Flexibility */}
      <Button variant="primary" size='sm' onClick={handleShowFlexibility} className='m-2 fs-6'>
        Flexibility 
      </Button>
      <Offcanvas show={showFlexibility} onHide={handleCloseFlexibility} placement="start" className="bg-primary half-cut">
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <Offcanvas.Title className='text-uppercase text-white fw-bold fs-6'>Flexibility <hr className="bg-light"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 fw-bold'>
          Options for various sizes and types of cargo, including oversized items, hazardous materials, and high-value goods.</div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-primary fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Express Services */}
      <Button variant="danger" size='sm' onClick={handleShowExpress} className='m-2 fs-6'>
        Express Services 
      </Button>
      <Offcanvas show={showExpress} onHide={handleCloseExpress} placement="start" className="bg-danger half-cut">
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <Offcanvas.Title className='text-uppercase text-white fw-bold fs-6'>Express Services<hr className="bg-light"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 fw-bold'>
          Dedicated express airfreight services for urgent deliveries, ensuring rapid dispatch and arrival</div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-danger fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


         {/*  Door-to-Door */}
         <Button variant="success" size='sm' onClick={handleShowDoor} className='m-2 fs-6'>
        Door-to-Door 
      </Button>
      <Offcanvas show={showDoor} onHide={handleCloseDoor} placement="start" className="bg-success half-cut">
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          <Offcanvas.Title className='text-uppercase text-white fw-bold fs-6'>Door-to-Door<hr className="bg-light"/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 fw-bold'>
          Comprehensive services that include pick-up and delivery, providing a seamless shipping experience from origin to destination.</div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-success fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffcanvasExample;
