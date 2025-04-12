import React from 'react';
import Section from '../components/Section';
import '../customcss/Home.css'; // Custom styles for this section
import myImage from '../assets/shady.jpg'; // Replace with your actual image path

const Home = () => (
  <Section id="home" title="">
    <div className="home-container">
      {/* Left Side: Info */}
      <div className="home-info">
        <h1 className="name">Hey, I'm <span className="highlight">Shahzad</span></h1>
        <h2 className="title">Web & Android Developer</h2>
        <p className="description">
          I'm passionate about crafting modern, user-friendly websites and powerful Android applications.
          I love solving problems, building things from scratch, and turning ideas into reality through code.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="home-image">
        <img src={myImage} alt="Shahzad" />
      </div>
    </div>
  </Section>
);

export default Home;
