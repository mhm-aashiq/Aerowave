import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OffcanvasExample = () => {
  const [showComprehensive, setShowComprehensive] = useState(false);
  const [showNetwork, setShowNetwork] = useState(false);
  const [showCost, setShowCost] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [showCustoms, setShowCustoms] = useState(false);
  const [showTracking, setShowTracking] = useState(false);
  const [showSafety, setShowSafety] = useState(false);
  const [showTailored, setShowTailored] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showCommitment, setShowCommitment] = useState(false);
   
  const handleCloseComprehensive = () => setShowComprehensive(false);
  const handleShowComprehensive = () => setShowComprehensive(true);

  const handleCloseNetwork = () => setShowNetwork(false);
  const handleShowNetwork = () => setShowNetwork(true);

  const handleCloseCost = () => setShowCost(false);
  const handleShowCost = () => setShowCost(true);

  const handleCloseDelivery = () => setShowDelivery(false);
  const handleShowDelivery = () => setShowDelivery(true);

  const handleCloseCustoms = () => setShowCustoms(false);
  const handleShowCustoms = () => setShowCustoms(true);

  const handleCloseTracking = () => setShowTracking(false);
  const handleShowTracking = () => setShowTracking(true);

  const handleCloseSafety = () => setShowSafety(false);
  const handleShowSafety = () => setShowSafety(true);

  const handleCloseTailored = () => setShowTailored(false);
  const handleShowTailored = () => setShowTailored(true);

  const handleCloseSupport = () => setShowSupport(false);
  const handleShowSupport = () => setShowSupport(true);

  const handleCloseCommitment = () => setShowCommitment(false);
  const handleShowCommitment = () => setShowCommitment(true);

  return (
    <>
    {/* Comprehensive Shipping Solutions */}
      <Button variant="primary" size='lg' onClick={handleShowComprehensive} className='m-2 fs-4'>
        Comprehensive Shipping Solutions 
      </Button>
      <Offcanvas show={showComprehensive} onHide={handleCloseComprehensive} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Comprehensive Shipping Solutions <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-primary fs-4 fw-bold'>
          Offering full container loads (FCL), less-than-container loads (LCL), and specialized cargo handling to meet diverse needs.
          </div>
          <Button className="mt-3" variant="primary" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

    {/*  Global Network */}
      <Button variant="success" size='lg' onClick={handleShowNetwork} className='m-2 fs-4'>
        Global Network 
      </Button>
      <Offcanvas show={showNetwork} onHide={handleCloseNetwork} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Global Network <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-success fs-4 fw-bold'>
          Leveraging an extensive network of international partners and agents to ensure reliable and efficient global transportation.
          </div>
          <Button className="mt-3" variant="success" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Cost-Effective Rates */}
      <Button variant="secondary" size='lg' onClick={handleShowCost} className='m-2 fs-4'>
        Cost-Effective Rates 
      </Button>
      <Offcanvas show={showCost} onHide={handleCloseCost} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Cost-Effective Rates<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-secondary fs-4 fw-bold'>
          Regular and frequent flight schedules ensure consistent and predictable delivery times. </div>
          <Button className="mt-3" variant="secondary" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Timely Delivery */}
      <Button variant="danger" size='lg' onClick={handleShowDelivery} className='m-2 fs-4'>
        Timely Delivery 
      </Button>
      <Offcanvas show={showDelivery} onHide={handleCloseDelivery} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Timely Delivery<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-danger fs-4 fw-bold'>
          Efficient logistics and streamlined processes to ensure that your cargo arrives on schedule.
          </div>
          <Button className="mt-3" variant="danger" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Customs Clearance */}
      <Button variant="warning" size='lg' onClick={handleShowCustoms} className='m-2 fs-4'>
        Customs Clearance 
      </Button>
      <Offcanvas show={showCustoms} onHide={handleCloseCustoms} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Customs Clearance <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-warning fs-4 fw-bold'>
          Expert assistance with customs documentation and procedures to facilitate smooth and compliant international trade.
          </div>
          <Button className="mt-3" variant="warning" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Cargo Tracking */}
      <Button variant="info" size='lg' onClick={handleShowTracking} className='m-2 fs-4'>
        Cargo Tracking 
      </Button>
      <Offcanvas show={showTracking} onHide={handleCloseTracking} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Cargo Tracking <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-info fs-4 fw-bold'>
          Real-time tracking and updates on the status of your shipment for enhanced visibility and peace of mind.
           </div>
          <Button className="mt-3" variant="info" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Cargo Safety */}
      <Button variant="dark" size='lg' onClick={handleShowSafety} className='m-2 fs-4'>
        Cargo Safety 
      </Button>
      <Offcanvas show={showSafety} onHide={handleCloseSafety} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Cargo Safety<hr /></Offcanvas.Title>
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


      {/*  Tailored Solutions */}
      <Button variant="primary" size='lg' onClick={handleShowTailored} className='m-2 fs-4'>
        Tailored Solutions 
      </Button>
      <Offcanvas show={showTailored} onHide={handleCloseTailored} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Tailored Solutions <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-primary fs-4 fw-bold'>
          Customized service options to address specific needs, including temperature-controlled shipping and oversized cargo handling.
          </div>
          <Button className="mt-3" variant="primary" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Dedicated Customer Support */}
      <Button variant="danger" size='lg' onClick={handleShowSupport} className='m-2 fs-4'>
        Dedicated Customer Support 
      </Button>
      <Offcanvas show={showSupport} onHide={handleCloseSupport} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Dedicated Customer Support<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-danger fs-4 fw-bold'>
          Responsive and knowledgeable support teams available to assist with inquiries, provide updates, and resolve any issues.
          </div>
          <Button className="mt-3" variant="danger" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


         {/* Sustainability Commitment */}
         <Button variant="dark" size='lg' onClick={handleShowCommitment} className='m-2 fs-4'>
        Sustainability Commitment 
      </Button>
      <Offcanvas show={showCommitment} onHide={handleCloseCommitment} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-3'>Sustainability Commitment<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-dark fs-4 fw-bold'>
          Implementing eco-friendly practices to reduce environmental impact and support sustainable shipping solutions.</div>
          <Button className="mt-3" variant="dark" size='lg'>
            <Link to="/aw/contactus" className="text-white fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasExample;
