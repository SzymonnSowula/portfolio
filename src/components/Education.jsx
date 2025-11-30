import React from 'react'
import Section from './Section'
import { useTranslation } from 'react-i18next'

const TimelineItem = ({ date, title, subtitle, description }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 640
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '0.5rem' : '2rem', 
      marginBottom: '3rem',
      position: 'relative' 
    }}>
      <div style={{ 
        minWidth: isMobile ? 'auto' : '120px', 
        textAlign: isMobile ? 'left' : 'right',
        color: 'var(--color-accent)',
        fontFamily: 'var(--font-primary)',
        fontWeight: 600,
        fontSize: 'clamp(0.9rem, 2vw, 1rem)'
      }}>
        {date}
      </div>
      
      <div style={{ 
        position: 'relative',
        paddingLeft: isMobile ? '0' : '2rem',
        borderLeft: isMobile ? 'none' : '1px solid var(--color-border)'
      }}>
        {!isMobile && (
          <div style={{
            position: 'absolute',
            left: '-5px',
            top: '5px',
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            background: 'var(--color-accent)'
          }} />
        )}
        
        <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', marginBottom: '0.5rem' }}>{title}</h3>
        <div style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>{subtitle}</div>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', lineHeight: '1.6' }}>{description}</p>
      </div>
    </div>
  )
}

const Education = () => {
  const { t } = useTranslation()

  return (
    <Section id="education" title={t('education.title')}>
      <div style={{ marginTop: '2rem' }}>
        <TimelineItem 
          date={t('education.school.date')}
          title={t('education.school.title')}
          subtitle={t('education.school.subtitle')}
          description={t('education.school.description')}
        />
      </div>
    </Section>
  )
}

export default Education