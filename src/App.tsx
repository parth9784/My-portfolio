import './App.css'
import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Stars from './star'
import Experience from './Experience'
import Projects from './Projects'
function App() {

  return (
    <>
      <div className="relative bg-gradient-to-b from-[#0a0a23] to-black min-h-screen  ::-webkit-scrollbar">
        <Stars />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />

      </div>

    </>
  )
}

export default App
