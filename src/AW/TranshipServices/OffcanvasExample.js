import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './offcan.css'; 

const OffcanvasExample = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const handleShow1 = () => setShow1(true);
  const handleClose1 = () => setShow1(false);
 
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
 
  const handleShow3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);
 
  const handleShow4 = () => setShow4(true);
  const handleClose4 = () => setShow4(false);
 
  const handleShow5 = () => setShow5(true);
  const handleClose5 = () => setShow5(false);
 
  return (
    <div className="container">
      {/* button 1 */}
      <button type="button" className="btn btn-primary" onClick={handleShow1}>
      Container Transshipment
      </button>

      <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show1 ? 'show' : ''}`} style={{ zIndex: 1050 }}>
        <div className={`toast ${show1 ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ transition: 'opacity 0.5s ease' }}>
          <div className="toast-header">
            <strong className="me-auto">Container Transshipment</strong>
            <small>just now</small>
            <button type="button" className="btn-close" onClick={handleClose1} aria-label="Close"></button>
          </div>
          <div className="toast-body">
          Description of how containers are handled between different modes of transport.
          </div>
        </div>
      </div>


      {/* button 2 */}
      <button type="button" className="btn btn-primary" onClick={handleShow2}>
      Cargo Handling
      </button>

      <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show2 ? 'show' : ''}`} style={{ zIndex: 1050 }}>
        <div className={`toast ${show2 ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ transition: 'opacity 0.5s ease' }}>
          <div className="toast-header">
            <strong className="me-auto">Cargo Handling</strong>
            <small>just now</small>
            <button type="button" className="btn-close" onClick={handleClose2} aria-label="Close"></button>
          </div>
          <div className="toast-body">
          Overview of cargo loading, unloading, and storage solutions.
          </div>
        </div>
      </div>


      {/* button 3 */}
      <button type="button" className="btn btn-primary" onClick={handleShow3}>
      Customs Clearance
      </button>

      <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show3 ? 'show' : ''}`} style={{ zIndex: 1050 }}>
        <div className={`toast ${show3 ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ transition: 'opacity 0.5s ease' }}>
          <div className="toast-header">
            <strong className="me-auto">Customs Clearance</strong>
            <small>just now</small>
            <button type="button" className="btn-close" onClick={handleClose3} aria-label="Close"></button>
          </div>
          <div className="toast-body">
          Details on customs documentation and compliance support.
          </div>
        </div>
      </div>


      {/* button 4 */}
      <button type="button" className="btn btn-primary" onClick={handleShow4}>
      Consultation and Support
      </button>

      <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show4 ? 'show' : ''}`} style={{ zIndex: 1050 }}>
        <div className={`toast ${show4 ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ transition: 'opacity 0.5s ease' }}>
          <div className="toast-header">
            <strong className="me-auto">Consultation and Support</strong>
            <small>just now</small>
            <button type="button" className="btn-close" onClick={handleClose4} aria-label="Close"></button>
          </div>
          <div className="toast-body">
          24/7 customer support for any inquiries or issues.
          </div>
        </div>
      </div>


       {/* button 5 */}
       <button type="button" className="btn btn-primary" onClick={handleShow5}>
      Warehousing Solutions
      </button>

      <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show5 ? 'show' : ''}`} style={{ zIndex: 1050 }}>
        <div className={`toast ${show5 ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ transition: 'opacity 0.5s ease' }}>
          <div className="toast-header">
            <strong className="me-auto">Warehousing Solutions</strong>
            <small>just now</small>
            <button type="button" className="btn-close" onClick={handleClose5} aria-label="Close"></button>
          </div>
          <div className="toast-body">
          Information on temporary and long-term storage options.
          </div>
        </div>
      </div>


    </div>

    
  );
};

export default OffcanvasExample;
