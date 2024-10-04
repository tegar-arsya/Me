// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Reveal from './Reveal';

const About = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://apiportofolio.tegararsyadani.my.id/api/about/postsAbout');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="about">
            <h2 className="text-center text-gray-200 md:text-7xl text-5xl tracking-tight mb-12">About Me</h2>
            <div className="flex flex-col items-center">
                {projects.map((project, index) => (
                    <Reveal key={index}>
                        <div className="w-full max-w-2xl mb-12 shadow-lg rounded-lg transition transform duration-300 ease-in-out hover:shadow-2xl">
                            <img
                                src={`https://apiportofolio.tegararsyadani.my.id${project.imageUrl}`}
                                alt={`About Me ${index + 1}`}
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                        </div>
                    </Reveal>
                ))}
            </div>
            <div className="flex flex-col items-center">
                {projects.map((project, index) => (
                    <Reveal key={index}>
                        <div className="w-full max-w-2xl mb-12 shadow-lg rounded-lg transition transform duration-300 ease-in-out hover:shadow-2xl">
                            <div className="p-6 bg-gray-800 rounded-b-lg">
                                <p className="text-gray-300 text-justify">{project.description}</p>
                            </div>
                        </div>

                    </Reveal>
                ))}
            </div>
        </div>

    );
};

export default About;