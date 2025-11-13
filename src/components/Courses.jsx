import React from 'react'
import Section from './Section'
import { useTranslation } from 'react-i18next';

function Courses() {
  const { t } = useTranslation(); 
  const myCourses = t('courses.items', { returnObjects: true });

  return (
    
    <Section title={t('courses.title')} id="kursy">
      <ul className="item-list">
        {myCourses.map(course => (
        
          <li key={course.title} className="list-item">
            <span className="item-date">{course.date}</span>
            <div className="item-title">{course.title}</div>
            <div className="item-subtitle">{course.issuer}</div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Courses