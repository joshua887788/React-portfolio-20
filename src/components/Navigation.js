import React from 'react';

function Navigation({ activeSection, setActiveSection }) {
    return (
        <nav>
            {['About Me', 'Portfolio', 'Contact', 'Resume'].map(section => (
                <button 
                    key={section}
                    className={activeSection === section ? 'active' : ''}
                    onClick={() => setActiveSection(section)}
                >
                    {section}
                </button>
            ))}
        </nav>
    );
}

export default Navigation;
