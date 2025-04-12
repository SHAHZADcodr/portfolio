import React from 'react';
import Section from '../components/Section';
import "../customcss/Project.css"

const Projects = () => {
  const projectData = new Array(4).fill(
    {
    name: "Project Name",
    url: "https://example.com",
    image: "https://via.placeholder.com/150", 
  },
  {
    name: "Project Name",
    url: "https://shahzadcodr.github.io/imageResizer/",
    image: "https://via.placeholder.com/150", 
  },
  {
    name: "Tic-Tac-Toe",
    url: "https://shahzadcodr.github.io/react002-tictactoe/",
    image: "https://via.placeholder.com/150", 
  },
  {
    name: "Docker Account",
    url: "https://hub.docker.com/u/shahzad16",
    image: "https://via.placeholder.com/150", 
  },

);

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
