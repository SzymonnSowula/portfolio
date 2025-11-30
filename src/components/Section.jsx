import React from 'react'
import { motion } from 'framer-motion'

const Section = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {title && (
          <h2 className="section-title" style={{ 
            marginBottom: '3rem',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            borderBottom: 'none'
          }}>
            <span style={{ color: 'var(--color-accent)' }}>/</span> {title}
          </h2>
        )}
        {children}
      </motion.div>
    </section>
  )
}

export default Section