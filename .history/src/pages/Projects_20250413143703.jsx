import React from 'react';
import Section from '../components/Section';
import "../customcss/Project.css";

// Images
import dockerAccount from '../assets/dockeraccount.png';
import ticTacToe from '../assets/tictactoe.png';
import imageResizer from '../assets/imageresizer.png';
import typingPage from '../assets/typingpage.png';

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
      name: "Docker Account",
      url: "https://hub.docker.com/u/shahzad16",
      image: dockerAccount,
    },
    {
      name: "Docker Account",
      url: "https://hub.docker.com/u/shahzad16",
      image: dockerAccount,
    },
    {
      name: "Docker Account",
      url: "https://hub.docker.com/u/shahzad16",
      image: dockerAccount,
    },{
      name: "Docker Account",
      url: "https://hub.docker.com/u/shahzad16",
      image: dockerAccount,
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
