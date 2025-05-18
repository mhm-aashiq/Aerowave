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
                      Customs Documentation service

                  </a>
                  <a 
                      className="btn btn-dark me-2 mt-5"  // Add margin end for small gaps
                      onClick={() => handleToggle('collapseExample2')}
                      aria-expanded={openCollapse === 'collapseExample2'} 
                      href="#!"
                  >
                      Tracking Information service
                  </a>
                  </div>
                  <div className='col-auto '>
                  <a 
                      className="btn btn-primary me-2 "  // Add margin end for small gaps
                      onClick={() => handleToggle('collapseExample3')}
                      aria-expanded={openCollapse === 'collapseExample3'} 
                      href="#!"
                  >
                      Support Resources service

                  </a>
                  <a 
                      className="btn btn-dark me-2 mt-5"  // Add margin end for small gaps
                      onClick={() => handleToggle('collapseExample4')}
                      aria-expanded={openCollapse === 'collapseExample4'} 
                      href="#!"
                  >
                      Customer Support service
                  </a>
              </div>
          </div>

          <div className='row'>
              <div className='col '>
                  <div className={`collapse ${openCollapse ? 'show' : ''}`} id="collapseExample">
                      <div className="card card-body bg-dark">
                          {openCollapse === 'collapseExample1' && (
                              <div>
                                <h1 className='Head2 text-justify'>Customs Documentation</h1>
                                  <p>We assist with all necessary paperwork to ensure your shipments comply with international regulations.</p> 
                                   
                              </div>
                          )}
                          {openCollapse === 'collapseExample2'  && (
                              <div>
                                 <h1 className='Head2'>Tracking Information</h1>
                                   <p>Receive detailed tracking updates so you can monitor your shipment’s progress in real time.</p> 
                                  
                              </div>
                          )}
                          {openCollapse === 'collapseExample3'  && (
                              <div>
                                 <h1 className='Head2'>Support Resources service</h1>
                                   <p>Access guides and FAQs to help you understand the documentation requirements for different shipping destinations.</p> 
                                  
                              </div>
                          )}
                          {openCollapse === 'collapseExample4'  && (
                              <div>
                                 <h1 className='Head2'>Customer Support service</h1>
                                   <p>Our dedicated team is available to answer any questions and provide assistance with documentation needs.</p> 
                                  
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
