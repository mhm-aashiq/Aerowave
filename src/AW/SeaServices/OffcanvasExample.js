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
    {/* Comprehensive Shipping Solutions */}
      <Button variant="primary" size='sm' onClick={handleShowComprehensive} className='m-2 fs-6'>
        Comprehensive Shipping Solutions 
      </Button>
      <Offcanvas show={showComprehensive} onHide={handleCloseComprehensive} placement="start"  className="bg-primary half-cut">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-6'>Comprehensive Shipping Solutions <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 '>
          Offering full container loads (FCL), less-than-container loads (LCL), and specialized cargo handling to meet diverse needs.
          </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-primary fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

    {/*  Global Network */}
      <Button variant="success" size='sm' onClick={handleShowNetwork} className='m-2 fs-6'>
        Global Network 
      </Button>
      <Offcanvas show={showNetwork} onHide={handleCloseNetwork} placement="start"  className="bg-success half-cut">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-6'>Global Network <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 '>
          Leveraging an extensive network of international partners and agents to ensure reliable and efficient global transportation.
          </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-success fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Cost-Effective Rates */}
      <Button variant="secondary" size='sm' onClick={handleShowCost} className='m-2 fs-6'>
        Cost-Effective Rates 
      </Button>
      <Offcanvas show={showCost} onHide={handleCloseCost} placement="start"  className="bg-secondary half-cut">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-6'>Cost-Effective Rates<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 '>
          Regular and frequent flight schedules ensure consistent and predictable delivery times. </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-secondary fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Timely Delivery */}
      <Button variant="danger" size='sm' onClick={handleShowDelivery} className='m-2 fs-6'>
        Timely Delivery 
      </Button>
      <Offcanvas show={showDelivery} onHide={handleCloseDelivery} placement="start" className="bg-danger half-cut">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-6'>Timely Delivery<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 fw-bold'>
          Efficient logistics and streamlined processes to ensure that your cargo arrives on schedule.
          </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-danger fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Customs Clearance */}
      <Button variant="warning" size='sm' onClick={handleShowCustoms} className='m-2 fs-6'>
        Customs Clearance 
      </Button>
      <Offcanvas show={showCustoms} onHide={handleCloseCustoms} placement="start"  className="bg-warning half-cut">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-6'>Customs Clearance <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 '>
          Expert assistance with customs documentation and procedures to facilitate smooth and compliant international trade.
          </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-warning fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Cargo Tracking */}
      <Button variant="info" size='sm' onClick={handleShowTracking} className='m-2 fs-6'>
        Cargo Tracking 
      </Button>
      <Offcanvas show={showTracking} onHide={handleCloseTracking} placement="start" className="bg-info half-cut">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-6'>Cargo Tracking <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 '>
          Real-time tracking and updates on the status of your shipment for enhanced visibility and peace of mind.
           </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-info fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Cargo Safety */}
      <Button variant="dark" size='sm' onClick={handleShowSafety} className='m-2 fs-6'>
        Cargo Safety 
      </Button>
      <Offcanvas show={showSafety} onHide={handleCloseSafety} placement="start" className="bg-dark half-cut">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-6'>Cargo Safety<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 '>
            Capable of transporting goods to and from virtually any part of the world, facilitating international trade and global supply chains.
          </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-dark fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Tailored Solutions */}
      <Button variant="primary" size='sm' onClick={handleShowTailored} className='m-2 fs-6'>
        Tailored Solutions 
      </Button>
      <Offcanvas show={showTailored} onHide={handleCloseTailored} placement="start" className="bg-primary half-cut">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-6'>Tailored Solutions <hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 '>
          Customized service options to address specific needs, including temperature-controlled shipping and oversized cargo handling.
          </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-primary fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


      {/*  Dedicated Customer Support */}
      <Button variant="danger" size='sm' onClick={handleShowSupport} className='m-2 fs-6'>
        Dedicated Customer Support 
      </Button>
      <Offcanvas show={showSupport} onHide={handleCloseSupport} placement="start" className="bg-danger half-cut">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-6'>Dedicated Customer Support<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 '>
          Responsive and knowledgeable support teams available to assist with inquiries, provide updates, and resolve any issues.
          </div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-danger fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>


         {/* Sustainability Commitment */}
         <Button variant="dark" size='sm' onClick={handleShowCommitment} className='m-2 fs-6'>
        Sustainability Commitment 
      </Button>
      <Offcanvas show={showCommitment} onHide={handleCloseCommitment} placement="start" className="bg-dark half-cut">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-uppercase fs-6'>Sustainability Commitment<hr /></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='text-uppercase text-white fs-6 '>
          Implementing eco-friendly practices to reduce environmental impact and support sustainable shipping solutions.</div>
          <Button className="mt-3" variant="light" size='sm'>
            <Link to="/aw/contactus" className="text-dark fw-bold">Contact Us</Link>
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasExample;
