import React from 'react'
import Section from './Section'
import { useTranslation } from 'react-i18next'; 

function Education() {
  const { t } = useTranslation();

  return (
   
    <Section title={t('education.title')} id="edukacja">
      <ul className="item-list">
        <li className="list-item">
        
          <span className="item-date">{t('education.year')}</span>
          <div className="item-title">{t('education.p3')}</div>
          <div className="item-subtitle">{t('education.p4')}</div>
        </li>
      </ul>
    </Section>
  )
}

export default Education