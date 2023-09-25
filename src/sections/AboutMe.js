import React from 'react';
import developerAvatar from '../assets/developer-avatar.png';  

function AboutMe() {
    return (
        <section>
            <img src={developerAvatar} alt="Developer" />
            <p>
                Hi! My name is Joshua Crawford. I have a passion for learning and growing new skills, which is how my passion for programming began.
                I am currently a student in the University of Toronto coding Bootcamp. I am learning the neccesary skills required to start my journey
                into the world of programming and web development. My projects that I have completed through this Bootcamp are available in my portfolio section.
            </p>
        </section>
    );
}

export default AboutMe;
