import './main.css'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Courses from './components/Courses'
import Contact from './components/Contact'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  return (
    <>
      <div className="bg-grid" />
      <Nav />
      
      <main className="container">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <About />
            <Projects />
            <Education />
            <Courses />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  )
}

export default App