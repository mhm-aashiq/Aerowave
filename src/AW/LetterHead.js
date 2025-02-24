import React from 'react';
import './LetterHead.css';

const LetterHead = () => {


  return (
    <div className='container'>
      <h1 className='text'>
        <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;Aerowave&nbsp;</span>
            <span aria-hidden="true" className="front-text">&nbsp;Aerowave&nbsp;</span>
        </button>
      </h1>
    </div>
  );
};

export default LetterHead;
