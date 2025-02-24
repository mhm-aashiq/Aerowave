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
      Company Registrations
      </button>

      <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show1 ? 'show' : ''}`} style={{ zIndex: 1050 }}>
        <div className={`toast ${show1 ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ transition: 'opacity 0.5s ease' }}>
          <div className="toast-header">
            <strong className="me-auto">Company Registrations</strong>
            <small>just now</small>
            <button type="button" className="btn-close" onClick={handleClose1} aria-label="Close"></button>
          </div>
          <div className="toast-body">
          Possible to Register under Company could help to Clear the cargo Without any Problem
          </div>
        </div>
      </div>


      {/* button 2 */}
      <button type="button" className="btn btn-primary" onClick={handleShow2}>
      Personal Registrations
      </button>

      <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show2 ? 'show' : ''}`} style={{ zIndex: 1050 }}>
        <div className={`toast ${show2 ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ transition: 'opacity 0.5s ease' }}>
          <div className="toast-header">
            <strong className="me-auto">Personal Registrations</strong>
            <small>just now</small>
            <button type="button" className="btn-close" onClick={handleClose2} aria-label="Close"></button>
          </div>
          <div className="toast-body">
          Registrations under Personal names for clearance of goods
          </div>
        </div>
      </div>


      {/* button 3 */}
      <button type="button" className="btn btn-primary" onClick={handleShow3}>
      Import Brokerage
      </button>

      <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show3 ? 'show' : ''}`} style={{ zIndex: 1050 }}>
        <div className={`toast ${show3 ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ transition: 'opacity 0.5s ease' }}>
          <div className="toast-header">
            <strong className="me-auto">Import Brokerage</strong>
            <small>just now</small>
            <button type="button" className="btn-close" onClick={handleClose3} aria-label="Close"></button>
          </div>
          <div className="toast-body">
          Facilitates the clearance of goods entering a country, ensuring compliance with regulations and payment of duties and taxes.
          </div>
        </div>
      </div>


      {/* button 4 */}
      <button type="button" className="btn btn-primary" onClick={handleShow4}>
      Export Brokerage
      </button>

      <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show4 ? 'show' : ''}`} style={{ zIndex: 1050 }}>
        <div className={`toast ${show4 ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ transition: 'opacity 0.5s ease' }}>
          <div className="toast-header">
            <strong className="me-auto">Export Brokerage</strong>
            <small>just now</small>
            <button type="button" className="btn-close" onClick={handleClose4} aria-label="Close"></button>
          </div>
          <div className="toast-body">
          Manages the customs procedures for goods leaving a country, ensuring proper documentation and adherence to export regulations.
          </div>
        </div>
      </div>


       {/* button 5 */}
       <button type="button" className="btn btn-primary" onClick={handleShow5}>
      Consulting Services
      </button>

      <div className={`toast-container position-fixed bottom-0 end-0 p-3 ${show5 ? 'show' : ''}`} style={{ zIndex: 1050 }}>
        <div className={`toast ${show5 ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true" style={{ transition: 'opacity 0.5s ease' }}>
          <div className="toast-header">
            <strong className="me-auto">Consulting Services</strong>
            <small>just now</small>
            <button type="button" className="btn-close" onClick={handleClose5} aria-label="Close"></button>
          </div>
          <div className="toast-body">
          Offers expertise on customs regulations, tariff classifications, and compliance strategies to help businesses navigate complex international trade laws.
          </div>
        </div>
      </div>








    </div>

    
  );
};

export default OffcanvasExample;
