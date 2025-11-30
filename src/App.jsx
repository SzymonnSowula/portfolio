import './main.css'
import { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import About from './components/About'
import { motion, AnimatePresence } from 'framer-motion'

// Lazy load heavy components
const Projects = lazy(() => import('./components/Projects'))
const Education = lazy(() => import('./components/Education'))
const Courses = lazy(() => import('./components/Courses'))
const Contact = lazy(() => import('./components/Contact'))

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ color: 'var(--color-text-muted)' }}>Loading...</div>
  </div>
)

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
            
            <Suspense fallback={<LoadingFallback />}>
              <Projects />
            </Suspense>
            
            <Suspense fallback={<LoadingFallback />}>
              <Education />
            </Suspense>
            
            <Suspense fallback={<LoadingFallback />}>
              <Courses />
            </Suspense>
            
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  )
}

export default App