import './App.css';
import { useRef } from 'react';
import Stars from './star';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Connect from './Connect';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const educationRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const experienceRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const projectsRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const connectRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-b from-[#0a0a23] to-black min-h-screen scroll-smooth overflow-y-hidden">
      <Stars />


      <Navbar
        onScrollToExperience={() => scrollToSection(experienceRef)}
        onScrollToProjects={() => scrollToSection(projectsRef)}
        onScrollToConnect={() => scrollToSection(connectRef)}
      />

      <Hero onScrollToConnect={() => scrollToSection(connectRef)} />

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={educationRef}>
        <Education />
      </section>

      <section ref={experienceRef}>
        <Experience />
      </section>

      <section ref={projectsRef}>
        <Projects />
      </section>

      <section ref={connectRef}>
        <Connect />
      </section>
    </div>
  );
}

export default App;
