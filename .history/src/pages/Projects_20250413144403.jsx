import React from 'react';
import Section from '../components/Section';
import "../customcss/Project.css";

// Images
import dockerAccount from '../assets/dockeraccount.png';
import ticTacToe from '../assets/tictactoe.png';
import imageResizer from '../assets/imageresizer.png';
import typingPage from '../assets/typingpage.png';
import petCare from '../assets/petCare.png';
import quiz from '../assets/quiz.png';
import sampleProfile from '../assets/'

const Projects = () => {
  const projectData = [
    {
      name: "Typing Website",
      url: "https://shahzadcodr.github.io/typing-test-react/",
      image: typingPage,
    },
    {
      name: "Image Resizer",
      url: "https://shahzadcodr.github.io/imageResizer/",
      image: imageResizer,
    },
    {
      name: "Tic-Tac-Toe",
      url: "https://shahzadcodr.github.io/react002-tictactoe/",
      image: ticTacToe,
    },
    {
      name: "Docker Account",
      url: "https://hub.docker.com/u/shahzad16",
      image: dockerAccount,
    },
    {
      name: "Pet Care",
      url: "https://shahzadcodr.github.io/pet_care/",
      image: petCare,
    },
    {
      name: "Quiz",
      url: "https://shahzadcodr.github.io/react001-quiz/",
      image: quiz,
    },
    {
      name: "Sample Profile",
      url: "https://shahzadcodr.github.io/work_sample/",
      image: sampleProfile,
    },{
      name: "Tic-Tac-Toe",
      url: "https://shahzadcodr.github.io/tic_tac_game1/",
      image: ticGame,
    },
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="card">
            <img src={project.image} alt={project.name} />
            <div className="p-4">
              <h3>{project.name}</h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
