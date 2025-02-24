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
    {/* fast delivery */}
      <Button variant="primary" size='lg' onClick={handleShowDelivery} className='m-2 fs-4'>
        Fast Delivery 
      </Button>
      <Offcanvas show={showDelivery} onHide={handleCloseDelivery} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Fast Delivery <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-primary fs-4 fw-bold'>
            Airfreight provides the quickest shipping option, significantly reducing transit times compared to sea or land transport.
          </div>
          <Button className="mt-3" variant="primary" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

    {/*  Global Reach */}
      <Button variant="success" size='lg' onClick={handleShowGlobal} className='m-2 fs-4'>
        Global Reach 
      </Button>
      <Offcanvas show={showGlobal} onHide={handleCloseGlobal} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Global Reach <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-success fs-4 fw-bold'>
            Capable of transporting goods to and from virtually any part of the world, facilitating international trade and global supply chains.
          </div>
          <Button className="mt-3" variant="success" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Reliable Scheduling */}
      <Button variant="secondary" size='lg' onClick={handleShowScheduling} className='m-2 fs-4'>
        Reliable Scheduling 
      </Button>
      <Offcanvas show={showScheduling} onHide={handleCloseScheduling} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Reliable Scheduling<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-secondary fs-4 fw-bold'>
          Regular and frequent flight schedules ensure consistent and predictable delivery times. </div>
          <Button className="mt-3" variant="secondary" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  High Security */}
      <Button variant="danger" size='lg' onClick={handleShowSecurity} className='m-2 fs-4'>
        High Security 
      </Button>
      <Offcanvas show={showSecurity} onHide={handleCloseSecurity} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>High Security<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-danger fs-4 fw-bold'>
            Capable of transporting goods to and from virtually any part of the world, facilitating international trade and global supply chains.
          </div>
          <Button className="mt-3" variant="danger" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Temperature Control */}
      <Button variant="warning" size='lg' onClick={handleShowTemperature} className='m-2 fs-4'>
        Temperature Control 
      </Button>
      <Offcanvas show={showTemperature} onHide={handleCloseTemperature} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Temperature Control <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-warning fs-4 fw-bold'>
          Specialized cargo holds and containers for temperature-sensitive items, ideal for pharmaceuticals, perishable goods, and other items requiring controlled environments.  </div>
          <Button className="mt-3" variant="warning" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Real-Time Tracking */}
      <Button variant="info" size='lg' onClick={handleShowTracking} className='m-2 fs-4'>
        Real-Time Tracking 
      </Button>
      <Offcanvas show={showTracking} onHide={handleCloseTracking} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Real-Time Tracking <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-info fs-4 fw-bold'>
          Advanced tracking systems provide real-time updates on the location and status of shipments, offering visibility and control. </div>
          <Button className="mt-3" variant="info" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Customs Clearance */}
      <Button variant="dark" size='lg' onClick={handleShowClearance} className='m-2 fs-4'>
        Customs Clearance 
      </Button>
      <Offcanvas show={showClearance} onHide={handleCloseClearance} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Customs Clearance<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-dark fs-4 fw-bold'>
            Capable of transporting goods to and from virtually any part of the world, facilitating international trade and global supply chains.
          </div>
          <Button className="mt-3" variant="dark" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Flexibility */}
      <Button variant="primary" size='lg' onClick={handleShowFlexibility} className='m-2 fs-4'>
        Flexibility 
      </Button>
      <Offcanvas show={showFlexibility} onHide={handleCloseFlexibility} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Flexibility <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-primary fs-4 fw-bold'>
          Options for various sizes and types of cargo, including oversized items, hazardous materials, and high-value goods.</div>
          <Button className="mt-3" variant="primary" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Express Services */}
      <Button variant="danger" size='lg' onClick={handleShowExpress} className='m-2 fs-4'>
        Express Services 
      </Button>
      <Offcanvas show={showExpress} onHide={handleCloseExpress} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Express Services<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-danger fs-4 fw-bold'>
          Dedicated express airfreight services for urgent deliveries, ensuring rapid dispatch and arrival</div>
          <Button className="mt-3" variant="danger" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


         {/*  Door-to-Door */}
         <Button variant="success" size='lg' onClick={handleShowDoor} className='m-2 fs-4'>
        Door-to-Door 
      </Button>
      <Offcanvas show={showDoor} onHide={handleCloseDoor} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Door-to-Door<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-success fs-4 fw-bold'>
          Comprehensive services that include pick-up and delivery, providing a seamless shipping experience from origin to destination.</div>
          <Button className="mt-3" variant="success" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffcanvasExample;
