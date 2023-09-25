import React from 'react';

import resumePdf from '../assets/resume.pdf';

function Resume() {
    const proficiencies = [
        "JavaScript (ES6+)",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "CSS3",
      
    ];

    return (
        <section>
            <h2>Resume</h2>
            <a href={resumePdf} download="DeveloperName-Resume.pdf">Download my Resume</a>
            <h3>Proficiencies</h3>
            <ul>
                {proficiencies.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default Resume;
