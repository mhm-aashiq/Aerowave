import React from 'react'
import './Sections.css'

const Sections = () => {
	const Air = require('../img/Air1.jpg')
	const Sea = require('../img/bigShip.jpg')
	const Delivery = require('../img/manDelivery.jpg')
	const Exports = require('../img/exports.jpg')
	const TS = require('../img/tranship1.jpg')
	const Files = require('../img/office.jpg')
	const Atheeq = require('../img/Atheeq.jpg')
	const Gayan = require('../img/Gayan.jpg');
    const Sajad = require('../img/Sajad.jpg');
    const Althaf = require('../img/Althaf.jpg');
    const Avatar = require('../img/avatar.png');
    const Jasim = require('../img/Jasim.png');
    const Ilham = require('../img/Ilham.jpg');
  return (
    
        <div className="wrapper">
			
	<div className="card">
		<div className="poster"><img src={Air} alt="Location Unknown" /></div>
		<div className="details">
			<h1>Air Freight</h1>
			<h2>Freight Forwarding</h2>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="far fa-star"></i>
				<span></span>
			</div>
			<div className="tags">
				<span className="tag">World wide</span>
				<span className="tag">Good Service</span>
				<span className="tag">Expectable Price</span>
			</div>
			<p className="desc">
			Air freight is the transportation of goods via aircraft, used for shipping items quickly over long distances.
			</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src={Atheeq} alt="Mohammed Atheeq" title="CEO" /></li>
					<li><img src={Ilham} alt="Ilham" title="Staff" /></li>
					<li><img src={Avatar} alt="Hussein Rasheed" title="Staff" /></li>
				</ul>
			</div>
		</div>
	</div>
	<div className="card">
		<div className="poster"><img src={Sea} alt="Location Unknown" /></div>
		<div className="details">
			<h1>Sea Freight</h1>
			<h2>Freight Forwarding</h2>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="far fa-star"></i>
				<span></span>
			</div>
			<div className="tags">
				<span className="tag">World wide</span>
				<span className="tag">All Cargo</span>
				<span className="tag">Expectable Price</span>
			</div>
			<p className="desc">
			Commonly used for shipping large quantities of goods internationally due to its cost-effectiveness for bulky items			</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src={Atheeq} alt="Mohammed Atheeq" title="CEO" /></li>
					<li><img src={Ilham} alt="Ilham" title="Staff" /></li>
					<li><img src={Sajad} alt="Sajad" title="Staff" /></li>
				</ul>
			</div>
		</div>
	</div>
	<div className="card">
		<div className="poster"><img src={Delivery} alt="Location Unknown" /></div>
		<div className="details">
			<h1>Door to Door</h1>
			<h2>Clearance</h2>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star-half-alt"></i>
				<span></span>
			</div>
			<div className="tags">
				<span className="tag yellow">Convenient way</span>
				<span className="tag">Time saving</span>
				<span className="tag blue">varieties of items</span>
			</div>
			<p className="desc">
			This service typically includes pick-up, transportation, and final delivery, making it convenient for both senders and recipients.			</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src={Althaf} alt="Mohammed Althaf" title="Staff" /></li>
					<li><img src={Gayan} alt="Gayan" title="Staff" /></li>
					<li><img src={Avatar} alt="Hussein Rasheed" title="Staff" /></li>
				</ul>
			</div>
		</div>
	</div>
    <div className="card">
		<div className="poster"><img src={Exports} alt="Location Unknown" /></div>
		<div className="details">
			<h1>Exports</h1>
			<h2>Clearance</h2>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="far fa-star"></i>
				<span></span>
			</div>
			<div className="tags">
				<span className="tag">Air Exports</span>
				<span className="tag">Sea Exports</span>
				<span className="tag">Expectable Price & Services</span>
			</div>
			<p className="desc">
			Exports are products or services that come from another country and are sold to people like you around the world.</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src={Atheeq} alt="Mohammed Atheeq" title="CEO" /></li>
					<li><img src={Ilham} alt="Ilham" title="Staff" /></li>
					<li><img src={Althaf} alt="Mohammed Althaf" title="Staff" /></li>
				</ul>
			</div>
		</div>
	</div>
	<div className="card">
		<div className="poster"><img src={TS} alt="Location Unknown" /></div>
		<div className="details">
			<h1>Transshipment</h1>
			<h2>Clearance</h2>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="far fa-star"></i>
				<span></span>
			</div>
			<div className="tags">
				<span className="tag">Islands</span>
				<span className="tag">Sea Transport</span>
				<span className="tag">Documentation</span>
			</div>
			<p className="desc">
				We are dealing with transhipment process with our best rates.
			</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src={Atheeq} alt="Mohammed Atheeq" title="CEO" /></li>
					<li><img src={Ilham} alt="Ilham" title="Staff" /></li>
				</ul>
			</div>
		</div>
	</div>
	<div className="card">
		<div className="poster"><img src={Files} alt="Location Unknown" /></div>
		<div className="details">
			<h1>Documentation</h1>
			<h2>Freight/Clearance</h2>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star-half-alt"></i>
				<span></span>
			</div>
			<div className="tags">
				<span className="tag yellow">Freights</span>
				<span className="tag">Clearance</span>
				<span className="tag blue">MPL/Customs</span>
			</div>
			<p className="desc">
			We provide comprehensive support to ensure that all necessary paperwork is accurately prepared and submitted
			</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src={Ilham} alt="Ilham" title="Staff" /></li>
					<li><img src={Sajad} alt="Sajad" title="Staff" /></li>
				</ul>
			</div>
		</div>
	</div>
</div>

  )
}

export default Sections