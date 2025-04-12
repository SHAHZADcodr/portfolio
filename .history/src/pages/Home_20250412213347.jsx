import React from 'react';
import Section from '../components/Section';
import { Card } from 'react-bootstrap';
import '../customcss/Home.css';
import myImage from '../assets/shady.jpg';

const Home = () => (
  <Section id="home" title="">
    <div className="home-container">
      {/* Left Side: Info */}
      <div className="home-info">
        <h1 className="name">
          Hey, I'm <span className="highlight">Shahzad</span>
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
          <Card className="image-card">
            <div className="card-inner">
              <div className="card-front">
                <Card.Img variant="top" src={myImage} className="profile-image" />
              </div>
              <div className="card-back">
                <Card.Body>
                  <Card.Title className="highlight">Shahzad</Card.Title>
                  <Card.Text className="title">Web & Android Developer</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </Section>
);

export default Home;
