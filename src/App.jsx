import './main.css'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Courses from './components/Courses'
import { motion } from 'framer-motion'

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

function App() {
  return (
    <div className="app-container">
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
      <Nav />
      </motion.div>
      {/* Kolumna 2: Główna treść */}
      <main className="main-content">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }} // Opóźnienie 0.2s
        >
        <About />
        </motion.div>
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.4 }} // Opóźnienie 0.4s
        >
        <Projects />
        </motion.div>
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.6 }} // Opóźnienie 0.6s
        >
        <Education />
        </motion.div>
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.8 }} // Opóźnienie 0.8s
        >
        <Courses />
        </motion.div>
      </main>
    </div>
  )
}

export default App