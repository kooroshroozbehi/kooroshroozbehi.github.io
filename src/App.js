import React from 'react';
import './App.css';
import Carousel from './components/carousel/carousel';
import About from './components/about/about';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/skills';
 import Projects from './components/projects/projects';
 import Contact from './components/contact/contact';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Carousel />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
