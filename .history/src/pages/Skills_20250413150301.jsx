import React from 'react';
import Section from '../components/Section';
import '../customcss/Skills.css';

const skills = [
  { name: "HTML", percent: 80, color: "#e34c26" },        // Orange
  { name: "CSS", percent: 75, color: "#264de4" },         // Blue
  { name: "Bootstrap", percent: 70, color: "#7952b3" },   // Purple
  { name: "JavaScript", percent: 80, color: "#f0db4f" },  // Yellow
  { name: "C & C++", percent: 85, color: "#004482" },     // Dark blue
  { name: "React", percent: 75, color: "#61dafb" },       // Light blue
  { name: "Kotlin", percent: 60, color: "#7f52ff" },      // Kotlin purple
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap justify-center gap-8 md:flex-nowrap">
        {skills.map((skill, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div
              className="circular"
              style={{
                '--percentage': skill.percent,
                '--circle-color': skill.color,
              }}
            >
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
