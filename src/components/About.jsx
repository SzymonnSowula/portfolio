import React from 'react'
import Section from './Section'
import { useTranslation } from 'react-i18next'; 

const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React',
  'React Native', 'Next.js', 'Tailwind CSS', 'Supabase',
  'MongoDB', 'SQL', 'PHP', 'Shopify'
];

function About() {
  const { t } = useTranslation(); 

  return (
  
    <Section title={t('about.title')} id="o-mnie">
      <p className="about-text">
        {t('about.p1')} 
      </p>
      <p className="about-text">
        {t('about.p2')} 
      </p>
      
      <h3>{t('about.skillsTitle')}</h3> 
      
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default About