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

const Courses = () => {
  const { t } = useTranslation()

  return (
    <Section id="courses" title={t('courses.title')}>
      <div style={{ marginTop: '2rem' }}>
        <TimelineItem 
          date={t('courses.items.react.date')}
          title={t('courses.items.react.title')}
          subtitle={t('courses.items.react.subtitle')}
          description={t('courses.items.react.description')}
        />
        <TimelineItem 
          date={t('courses.items.ai.date')}
          title={t('courses.items.ai.title')}
          subtitle={t('courses.items.ai.subtitle')}
          description={t('courses.items.ai.description')}
        />
        <TimelineItem 
          date={t('courses.items.inf03.date')}
          title={t('courses.items.inf03.title')}
          subtitle={t('courses.items.inf03.subtitle')}
          description={t('courses.items.inf03.description')}
        />
        <TimelineItem 
          date={t('courses.items.ad.date')}
          title={t('courses.items.ad.title')}
          subtitle={t('courses.items.ad.subtitle')}
          description={t('courses.items.ad.description')}
        />
      </div>
    </Section>
  )
}

export default Courses