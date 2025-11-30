import React from 'react'
import Section from './Section'
import { useTranslation } from 'react-i18next'

const TimelineItem = ({ date, title, subtitle, description }) => (
  <div style={{ 
    display: 'flex', 
    gap: '2rem', 
    marginBottom: '3rem',
    position: 'relative' 
  }}>
    <div style={{ 
      minWidth: '120px', 
      textAlign: 'right',
      color: 'var(--color-accent)',
      fontFamily: 'var(--font-primary)',
      fontWeight: 600
    }}>
      {date}
    </div>
    
    <div style={{ 
      position: 'relative',
      paddingLeft: '2rem',
      borderLeft: '1px solid var(--color-border)'
    }}>
      <div style={{
        position: 'absolute',
        left: '-5px',
        top: '5px',
        width: '9px',
        height: '9px',
        borderRadius: '50%',
        background: 'var(--color-accent)'
      }} />
      
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
      <div style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{subtitle}</div>
      <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px' }}>{description}</p>
    </div>
  </div>
)

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