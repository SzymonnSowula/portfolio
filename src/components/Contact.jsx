import React from 'react'
import Section from './Section'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  
  return (
    <Section id="contact" title={t('contact.title')}>
      <div className="contact-container" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2rem' }}>
          Have a project in mind?
        </h2>
        <a href="mailto:contact@example.com" className="btn btn-primary" style={{ fontSize: '1.5rem', padding: '1.5rem 3rem' }}>
          Say Hello
        </a>
      </div>
    </Section>
  )
}

export default Contact
