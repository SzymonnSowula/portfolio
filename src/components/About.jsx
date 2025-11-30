import React, { memo } from 'react'
import Section from './Section'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const BentoItem = memo(({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bento-item ${className}`}
    style={{
      background: 'var(--color-surface)',
      borderRadius: '24px',
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      border: '1px solid var(--color-border)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
  >
    {children}
  </motion.div>
))

BentoItem.displayName = 'BentoItem'

const About = () => {
  const { t } = useTranslation()

  return (
    <Section id="about" title={t('about.title')}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
        gap: '1.5rem',
        marginTop: '2rem',
        minHeight: '400px'
      }}>
        {/* Main Bio - LCP Element */}
        <BentoItem 
          className="col-span-2" 
          style={{ 
            gridColumn: window.innerWidth > 640 ? 'span 2' : 'span 1',
            minHeight: '200px'
          }}
        >
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem' }}>
            {t('about.heading')}
          </h3>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: 'var(--color-text-muted)' }}>
            {t('about.description')}
          </p>
        </BentoItem>

        {/* Tech Stack */}
        <BentoItem delay={0.1} style={{ minHeight: '180px' }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--color-accent)', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>{t('about.stackTitle')}</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['React', 'Next.js', 'React Native', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'].map(tech => (
              <span key={tech} style={{
                background: 'rgba(255,255,255,0.05)',
                padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
                borderRadius: '100px',
                fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                border: '1px solid var(--color-border)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </BentoItem>

        {/* Stats or Soft Skills */}
        <BentoItem delay={0.2} style={{ minHeight: '180px' }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--color-accent)', fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>{t('about.focusTitle')}</h4>
          <ul style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
            <li>🛒 {t('about.focus.ecommerce')}</li>
            <li>🔌 {t('about.focus.api')}</li>
            <li>📈 {t('about.focus.scalable')}</li>
          </ul>
        </BentoItem>
      </div>
    </Section>
  )
}

export default memo(About)