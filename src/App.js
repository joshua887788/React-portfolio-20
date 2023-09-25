import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('About Me');

  return (
    <div className="App">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent activeSection={activeSection} />
      <Footer />
    </div>
  );
}

export default App;
