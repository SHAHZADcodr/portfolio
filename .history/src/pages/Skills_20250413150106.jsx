import React from 'react';
import Section from '../components/Section';
import '../customcss/Skills.css';

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
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div className="flex flex-col items-center" key={index}>
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
