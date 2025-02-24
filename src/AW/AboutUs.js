import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer'
import  { useState, useEffect } from 'react';
import WorldMap from './WorldMap';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const CEO = require('../img/Atheeq.jpg');
    const Gayan = require('../img/Gayan.jpg');
    const CTO = require('../img/p3.jpg');
    const Sajad = require('../img/Sajad.jpg');
    const Althaf = require('../img/Althaf.jpg');
    const king = require('../img/king.jpg');
    const Jasim = require('../img/Jasim.png');
    const Ilham = require('../img/Ilham.jpg');
    const Map = require('../img/map.jpg');
    const Map1 = require('../img/map1.jpg');

    const [heroContent, setHeroContent] = useState({
        title: "",
        subtitle: "",
        backgroundImage: ''
    });

    // Function to generate random number within a range
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Function to select random hero content
    const selectRandomHeroContent = () => {
        const titles = ["Welcome to AEROWAVE PVT LTD", "Seamless Solutions for Every Challenge", "Empowering Businesses Worldwide"];
        const subtitles = ["Partner with us for seamless logistics solutions that drive your business forward.", "No matter the complexity, our team is here to provide you with solutions that work.", "Our innovative shipping solutions are designed to enhance your supply chain and support your growth."];
        const backgroundImages = [Map1,king,Map]; // Update with your image filenames

        const randomIndex = getRandomNumber(0, titles.length - 1);

        setHeroContent({
            title: titles[randomIndex],
            subtitle: subtitles[randomIndex],
            backgroundImage: backgroundImages[randomIndex]
        });
    };

    // Load random hero content on component mount
    useEffect(() => {
        selectRandomHeroContent();
    }, []);
    const titleStyle = {
        color: heroContent.title === 'Discover the Future with Us' ? 'white' : 'black',
        color: heroContent.subtitle === 'Transforming ideas into reality.' ? 'white' : 'black',
    };
    const subtitleStyle = {
         color: heroContent.subtitle === 'Transforming ideas into reality.' ? 'white' : 'black',
    };


    return (
        <div>
            <div className='fixed'>
            <Navbar />
            </div>
        <div className='background'>
            <section className="hero" style={{ backgroundImage: `url(${heroContent.backgroundImage})` , width:'100%' }}>
                <div className="hero-content" >
                    <h1 style={titleStyle}>{heroContent.title}</h1>
                    <p style={subtitleStyle}>{heroContent.subtitle}</p>
                </div>
            </section>

            <div className='container'>
                <section className="about-us-section">
                    <h1>About Us</h1>
                    <p>Welcome to [Company Name], where we believe in excellence and innovation. Our journey started in [Year], and since then, we have been committed to delivering top-notch services to our clients.</p>
                </section>


                <WorldMap />

                <section className="our-story">
                    <h2>Our Story</h2>
                    <p className='fst-italic'>Our mission is to provide reliable, efficient, and innovative logistics solutions that seamlessly connect businesses and consumers worldwide. We are dedicated to exceeding customer expectations through exceptional service, cutting-edge technology, and a commitment to sustainability.</p>
                </section>

                <section className="our-vision">
                    <h2>Our Story</h2>
                    <p className='fst-italic'>To be the global leader in shipping and logistics, driving the evolution of the industry with sustainable practices, unmatched customer satisfaction, and pioneering technology. We aim to shape the future of global trade by setting new standards for excellence and innovation.</p>
                </section>

                <div className='row'>
                    <h2>Meet the Team</h2>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={CEO} alt="Atheeq" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                                <h3>Mohamed Atheeq</h3>
                                <p>CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={Ilham} alt="Ilham" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                                <h3>Mohamed Ilham</h3>
                                <p>Documentation </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={Jasim} alt="Mohamed Jasim" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                                <h3>Mohamed Jasim</h3>
                                <p>Accountant</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={CTO} alt="Mohamed Jasim" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                                <h3>Hussain Rasheed</h3>
                                <p>Clearance Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={Sajad} alt="Mohamed sajad" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                                <h3>Mohamed sajad</h3>
                                <p>Documentation & Vessel handling</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={Althaf} alt="Mohamed Althaf" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                                <h3>Mohamed Althaf</h3>
                                <p>Clearance Officer</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={Gayan} alt="Gayan Indunil" style={{ transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                                <h3>Gayan Indunil</h3>
                                <p>Clearance Officer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="contact">
                    <h2>Contact Us</h2>
                    <p>Feel free to reach out to us at <Link href="mailto:csv@aerowavemv.com">contact@aerowave.com</Link> or call us at (+960) 944-2123.</p>
                </section>
            </div>
            <Footer />
        </div>
        </div> 
    );
}

export default AboutUs;
