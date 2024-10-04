// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // For selected project
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Fetch data from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://apiportofolio.tegararsyadani.my.id/api/porto/postsPorto');
        setProjects(response.data);  // Assuming response.data contains the array of projects
      } catch (error) {
        console.error('Error fetching the projects data:', error);
      }
    };

    fetchProjects();
  }, []);

  // Open modal and set selected project
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:my-20 bg" id="portfolio">
      <h2 className="text-center text-gray-200 md:text-7xl text-5xl tracking-tight mb-8">Portofolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div 
              onClick={() => openModal(project)} // Open modal on click
              className="p-4 shadow-lg rounded-lg transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={`https://apiportofolio.tegararsyadani.my.id${project.imageUrl}`}
                alt={project.title}
                className="w-full h-72 object-cover rounded-lg" // Increase height to 72 and maintain object-cover
              />
              <h3 className="text-2xl font-semibold text-gray-200 mt-4">{project.title}</h3>
              {/* <p className="text-gray-300 mb-4">{project.description}</p> */}
              <div className="flex space-x-4">
                <a href={project.site} className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300">
                  View Site
                </a>
                <a href={project.github} className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[800px] max-h-[90vh] rounded-lg shadow-lg overflow-hidden">
            {/* Modal content with scroll */}
            <div className="p-6 overflow-y-auto max-h-[90vh]"> {/* Added overflow-y-auto and max-h-[90vh] */}
              <img
                src={`https://apiportofolio.tegararsyadani.my.id${selectedProject.imageUrl}`}
                alt={selectedProject.title}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg mb-4" // Enlarged the image height
              />
              <h3 className="text-3xl font-semibold mb-2 text-center">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4 whitespace-pre-line bg-gray-200 p-4 rounded-lg">
                {selectedProject?.description}
              </p>
              <div className="flex space-x-4 mb-4">
                {selectedProject.site && (
                  <a href={selectedProject.site} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    View Site
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300">
                    <AiFillGithub />
                  </a>
                )}
              </div>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
