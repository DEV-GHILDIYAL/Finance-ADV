import React from 'react';
import './About.css'; // Importing CSS for styles

const About = () => {
    return (
        <div className="about-section">
            <h1 className="about-title">About Us</h1>
            <div className="about-content">
                <img 
                    src="../../assets/images/about.jpeg" 
                    alt="About Us" 
                    className="about-image" 
                />
                <div className="about-text">
                    <p>
                        Welcome to our platform! We are dedicated to providing top-notch services and products that enhance your experience. Our mission is to inspire and empower individuals to achieve their goals through innovation and creativity.
                    </p>
                    <p>
                        Our team consists of passionate professionals who believe in collaboration and continuous improvement. We are committed to delivering quality and excellence in everything we do.
                    </p>
                </div>
            </div>
            <div className="about-links">
                <a href="/contact" className="about-link">Contact Us</a>
                <a href="/team" className="about-link">Meet the Team</a>
            </div>
        </div>
    );
};

export default About;
