// src/pages/Home.jsx
import React from 'react';
import Section from '../components/Section';
import { Card } from 'react-bootstrap';
import '../customcss/Home.css';
import myImage from '../assets/shady.jpg'; // Ensure this file exists in src/assets

const Home = () => (
  <Section id="home" title="">
    <div className="home-container">
      {/* Left Side: Info */}
      <div className="home-info">
        <h1 className="name">
          Hey, I'm <span className="highlight">Shahzad Ahmad</span>
        </h1>
        <h2 className="title">Web & Android Developer</h2>
        <p className="description">
          I'm passionate about crafting modern, user-friendly websites and powerful Android applications.
          I love solving problems, building things from scratch, and turning ideas into reality through code.
        </p>
      </div>

      {/* Right Side: Image Card */}
      <div className="home-card">
        <div className="card-wrapper">
          <div className="image-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={myImage} alt="Shahzad" className="profile-image" />
              </div>
              <div className="card-back">
                {/* <h3 className="highlight">Shahzad</h3> */}
                {/* <p className="title">Web & Android Developer</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Home;
