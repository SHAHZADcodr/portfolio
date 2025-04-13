import React from 'react';
import Section from '../components/Section';
import { Row, Col } from 'react-bootstrap';
import '../customcss/Skills.css'; // Assuming you already have your custom styles

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
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col
            key={index}
            xs={12} sm={6} md={4} lg={3} // Adjusts the width for different screen sizes
            className="d-flex flex-column align-items-center mb-4"
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
            <p className="mt-2 text-sm font-medium highlight">{skill.name}</p>
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default Skills;
