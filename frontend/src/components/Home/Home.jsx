import React from 'react';
import './Home.css';

const features = [
  { id: 1, title: "Feature 1", description: "This is a brief description of feature 1." },
  { id: 2, title: "Feature 2", description: "This is a brief description of feature 2." },
  { id: 3, title: "Feature 3", description: "This is a brief description of feature 3." },
  { id: 4, title: "Feature 4", description: "This is a brief description of feature 4." },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Our Website</h1>
        <p className="hero-subtitle">Discover amazing content and connect with us!</p>
        <button className="hero-button">Get Started</button>
      </div>

      <div className="features-section">
        <h2>Our Features</h2>
        <div className="scrolling-container">
          {/* Duplicate feature array to achieve seamless scroll */}
          {[...features, ...features].map((feature, index) => (
            <div key={feature.id + features.length * (index < features.length ? 0 : 1)} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button className="card-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
