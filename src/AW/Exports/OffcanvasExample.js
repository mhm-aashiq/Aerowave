import React, { useState } from 'react';
import './offcan.css'


const OffcanvasExample = () => {
  const [openCollapse, setOpenCollapse] = useState(null); // Track the currently open collapse

  const handleToggle = (id) => {
      setOpenCollapse(openCollapse === id ? null : id); // Toggle collapse
  };

  return (
      <div className='container '>
          <div className='row mb-3 justify-content-center'>
              <div className='col-auto '>
                  <a 
                      className="btn btn-primary me-2 "  // Add margin end for small gaps
                      onClick={() => handleToggle('collapseExample1')}
                      aria-expanded={openCollapse === 'collapseExample1'} 
                      href="#!"
                  >
                      Sea Export Services

                  </a>
                  <a 
                      className="btn btn-dark me-2 mt-5"  // Add margin end for small gaps
                      onClick={() => handleToggle('collapseExample2')}
                      aria-expanded={openCollapse === 'collapseExample2'} 
                      href="#!"
                  >
                      Air Export Services
                  </a>
              </div>
          </div>

          <div className='row'>
              <div className='col '>
                  <div className={`collapse ${openCollapse ? 'show' : ''}`} id="collapseExample">
                      <div className="card card-body bg-dark">
                          {openCollapse === 'collapseExample1' && (
                              <div>
                                <h1 className='Head2'>Sea Export Services</h1>
                                  <p>Container Loading and Unloading</p> 
                                  <p>Customs Clearance</p> 
                                  <p>Documentation Services</p> 
                                  <p>Cargo Insurance</p> 
                                  <p>Freight Forwarding</p> 
                                  <p>Packaging and Crating</p> 
                                  <p>Warehousing and Storage</p> 
                                  <p>Temperature-Controlled Shipping</p> 
                                  <p>Transit Tracking</p> 
                                  <p>Door-to-Door Service</p> 
                              </div>
                          )}
                          {openCollapse === 'collapseExample2'  && (
                              <div>
                                 <h1 className='Head2'>Air Export Services</h1>
                                   <p>Cargo Loading and Unloading</p> 
                                   <p>Customs Clearance</p> 
                                   <p>Documentation Services</p> 
                                   <p>Cargo Insurance</p> 
                                   <p>Freight Forwarding</p> 
                                   <p>Express Shipping</p> 
                                   <p>Packaging Solutions</p> 
                                   <p>Transit Tracking</p> 
                                   <p>Door-to-Door Service</p> 
                                   <p>Specialized Handling</p> 
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          </div>
      </div>

  );
};

export default OffcanvasExample;
