import React from 'react';
import Section from '../components/Section';

const Projects = () => {
  // Example data for projects
  const projectData = new Array(60).fill({
    name: "Project Name",
    url: "https://example.com", // Replace with actual project URLs
    image: "https://via.placeholder.com/150", // Replace with actual images
  });

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="card bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-40 object-cover" 
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal-400 hover:underline"
              >
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
