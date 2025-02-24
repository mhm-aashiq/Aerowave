import React from 'react'
import './Sections.css'

const Sections = () => {
	const Air = require('../img/Air1.jpg')
	const Sea = require('../img/bigShip.jpg')
	const Delivery = require('../img/manDelivery.jpg')
	const Exports = require('../img/exports.jpg')
	const TS = require('../img/tranship1.jpg')
	const Files = require('../img/office.jpg')
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
					<li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews" /></li>
					<li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd" /></li>
					<li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera" /></li>
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
					<li><img src="https://i.postimg.cc/yY2QcYRp/cast-21.jpg" alt="Angelina Whyte" title="Angelina Whyte" /></li>
					<li><img src="https://i.postimg.cc/R0BgpsXc/cast-22.jpg" alt="Ivan Benson" title="Ivan Benson" /></li>
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
				<span className="tag yellow">Convenient</span>
				<span className="tag">Time saving</span>
				<span className="tag blue">Any kind of items</span>
			</div>
			<p className="desc">
			This service typically includes pick-up, transportation, and final delivery, making it convenient for both senders and recipients.			</p>
			<div className="cast">
				<h3>Cast</h3>
				<ul>
					<li><img src="https://i.postimg.cc/xd3twv4B/cast-31.jpg" alt="Jessica Enduro" title="Jessica Enduro" /></li>
					<li><img src="https://i.postimg.cc/C1MmSZy5/cast-32.jpg" alt="Charles Garcia" title="Charles Garcia" /></li>
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
					<li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews" /></li>
					<li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd" /></li>
					<li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg
" alt="Antonio Herrera" title="Antonio Herrera" /></li>
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
					<li><img src="https://i.postimg.cc/yY2QcYRp/cast-21.jpg" alt="Angelina Whyte" title="Angelina Whyte" /></li>
					<li><img src="https://i.postimg.cc/R0BgpsXc/cast-22.jpg" alt="Ivan Benson" title="Ivan Benson" /></li>
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
					<li><img src="https://i.postimg.cc/xd3twv4B/cast-31.jpg" alt="Jessica Enduro" title="Jessica Enduro" /></li>
					<li><img src="https://i.postimg.cc/C1MmSZy5/cast-32.jpg" alt="Charles Garcia" title="Charles Garcia" /></li>
				</ul>
			</div>
		</div>
	</div>
</div>

  )
}

export default Sections