import './main.css'
import { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import About from './components/About'

// Lazy load heavy components including animations
const Projects = lazy(() => import('./components/Projects'))
const Education = lazy(() => import('./components/Education'))
const Courses = lazy(() => import('./components/Courses'))
const Contact = lazy(() => import('./components/Contact'))

// Minimal loading fallback
const LoadingFallback = () => (
  <div style={{ minHeight: '200px' }} />
)

function App() {
  return (
    <>
      <div className="bg-grid" />
      <Nav />
      
      <main className="container">
        {/* Remove AnimatePresence and motion wrapper for faster FCP */}
        <div>
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
        </div>
      </main>
    </>
  )
}

export default App