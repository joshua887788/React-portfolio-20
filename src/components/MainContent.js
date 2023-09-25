import React from 'react';
import AboutMe from '../sections/AboutMe';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';
import Resume from '../sections/Resume';

function MainContent({ activeSection }) {
    return (
        <main>
            {activeSection === 'About Me' && <AboutMe />}
            {activeSection === 'Portfolio' && <Portfolio />}
            {activeSection === 'Contact' && <Contact />}
            {activeSection === 'Resume' && <Resume />}
        </main>
    );
}

export default MainContent;


