import React from 'react';
import Section from '../components/Section';
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
      <div className="flex flex-col lg:flex-col items-center gap-6">

        {skills.map((skill, index) => (
          <div className="flex flex-row items-center" key={index}>
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
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
