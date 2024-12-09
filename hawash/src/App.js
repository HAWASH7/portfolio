import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CareerPath from './components/CareerPath';
import Contact from './components/Contact';
import { Link, Element } from 'react-scroll';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />

      {/* About Section */}
      <section id="about" className="section">
        <h1>Hi, i'm Mohammad !</h1>
        <div className="about-content">
          <img src="me.png" alt="Profile" className="profile-pic" />
          <p>
          🎓 Graduate of An-Najah National University | Computer Science 🌐<br></br>

Driven by a deep ambition to create, learn, and excel, I believe that success isn't just about reaching goals—it’s about continuous growth and embracing each challenge as a stepping stone.
I’m committed to combining technical expertise with an unwavering dedication to progress, striving to make an impact wherever I go.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <Projects />
      </section>

      {/* Career Path Section */}
      <section id="career" className="section">
        <CareerPath />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
