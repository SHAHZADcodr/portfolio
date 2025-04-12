import React from 'react';
import Section from '../components/Section';
import "../customcss/"

const Projects = () => {
  const projectData = new Array(60).fill({
    name: "Project Name",
    url: "https://example.com", // Replace with actual project URLs
    image: "https://via.placeholder.com/150", // Replace with actual images
  });

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
