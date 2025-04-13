// ./pages/Skills.jsx
import React from 'react';
import Section from '../components/Section';
import '../customcss/skills.css'; // 👈 Import custom styles for circular bars

const skills = [
  { name: "HTML", percent: 80 },
  { name: "CSS", percent: 75 },
  { name: "Bootstrap", percent: 70 },
  { name: "JavaScript", percent: 80 },
  { name: "C & C++", percent: 85 },
  { name: "React", percent: 75 },
  { name: "Kotlin", percent: 60 },
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div className="skill-circle text-center" key={index}>
            <div className="circular" style={{ '--percentage': skill.percent }}>
              <span>{skill.percent}%</span>
            </div>
            <p className="mt-2 text-lg font-semibold highlight">{skill.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
