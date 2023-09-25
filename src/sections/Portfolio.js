import React from 'react';

import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';
import project4Image from '../assets/project4.png';
import project5Image from '../assets/project5.png';
import project6Image from '../assets/project6.png';


function Portfolio() {
    const projects = [
        {
            title: "Work Day Scheduler",
            imageUrl: project1Image,
            deployedUrl: "https://joshua887788.github.io/Work-day-scheduler/",
            githubUrl: "https://github.com/joshua887788/Work-day-scheduler"
        },
        {
            title: "Password Generator App",
            imageUrl: project2Image,
            deployedUrl: "https://joshua887788.github.io/password-generator/",
            githubUrl: "https://github.com/joshua887788/password-generator"
        },
        {
            title: "Coding Quiz App",
            imageUrl: project3Image,
            deployedUrl: "https://joshua887788.github.io/coding-quiz-app/",
            githubUrl: "https://github.com/joshua887788/coding-quiz-app"
        },
        {
            title: "Note Taker App",
            imageUrl: project4Image,
            deployedUrl: "https://radiant-ravine-71179-12343c8977e6.herokuapp.com/",
            githubUrl: "https://github.com/joshua887788/notes "
        },
        {
            title: "Weather Forecast App",
            imageUrl: project5Image,
            deployedUrl: "https://joshua887788.github.io/Weather-forecast-app/",
            githubUrl: "https://github.com/joshua887788/Weather-forecast-app"
        },
        {
            title: "Flexbox Portfolio",
            imageUrl: project6Image,
            deployedUrl: "https://joshua887788.github.io/Mod2-Coding-portfolio/",
            githubUrl: "https://github.com/joshua887788/Mod2-Coding-portfolio"
        },
        
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-card" key={project.title}>
                        <img src={project.imageUrl} alt={project.title} />
                        <h3>{project.title}</h3>
                        <div>
                            <a href={project.deployedUrl} target="_blank" rel="noreferrer">Live App</a>
                            <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
