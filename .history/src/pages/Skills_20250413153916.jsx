import React from 'react';
import Section from '../components/Section';
import { Row, Col } from 'react-bootstrap';
import '../customcss/Skills.css';

const skills = [
  { name: "HTML", percent: 80, color: "#e34c26" },
  { name: "CSS", percent: 75, color: "#264de4" },
  { name: "Bootstrap", percent: 70, color: "#7952b3" },
  { name: "JavaScript", percent: 80, color: "#f0db4f" },
  { name: "C & C++", percent: 85, color: "#004482" },
  { name: "React", percent: 75, color: "#61dafb" },
  { name: "Kotlin", percent: 60, color: "#7f52ff" },
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <Row className="justify-content-center skills-container">
        {skills.map((skill, index) => (
          <Col
            key={index}
            xs={6} sm={4} md={3} lg={2} // Adjust layout to fit better on all screen sizes
            className="skill-item mb-4"
          >
            <div
              className="circular"
              style={{
                '--percentage': skill.percent,
                '--circle-color': skill.color,
              }}
            >
              <span>{skill.percent}%</span>
            </div>
            <div className="skill-name">{skill.name}</div>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default Skills;
