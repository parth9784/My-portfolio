import './App.css'
import { motion, useScroll } from "motion/react"
import Hero from './Hero'
import Navbar from './Navbar'
function App() {
  const { scrollYProgress } = useScroll()

  return (
    <>

      <Navbar />
      <Hero />


    </>
  )
}

export default App
