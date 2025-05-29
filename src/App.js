import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './compnent/header/header'
import Home from './compnent/home/home'
import About from './compnent/About/about'
import Project from './compnent/Projects/project'
import Testimonials from './compnent/Testimonials/Testimonials'
import Contact from './compnent/Contact/Contact'

TodoList
import { initGA, trackEvent } from "./analytics";

const App = () => {
  useEffect(() => {
    initGA(); // Initialize Google Analytics on page load
  }, []);
  // set active navbar items
  const tagManagerScript = document.createElement('script');
  tagManagerScript.innerHTML = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KMKBRXR4');

`;
  document.head.appendChild(tagManagerScript);
  const [activeSection, setActiveSection] = useState('Home');
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sectionRefs.current.forEach((section) => {
        const { offsetTop, offsetHeight } = section;
        // console.log(offsetTop);
        if (
          scrollPosition >= offsetTop - 400 &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
          trackEvent("Section View", "Scroll", section.id);
        } else {
          // setActiveSection("Home");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //--------------------------//
  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <Home ref={(el) => (sectionRefs.current[0] = el)} id="Home" />
      <About ref={(el) => (sectionRefs.current[1] = el)} id="About" />
      <Project ref={(el) => (sectionRefs.current[2] = el)} id="Projects" />
      <Testimonials ref={(el) => (sectionRefs.current[3] = el)} id="Testimonials" />
      <Contact ref={(el) => (sectionRefs.current[4] = el)} id="Contact" />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
