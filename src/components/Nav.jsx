import React from 'react'
import { useTranslation } from 'react-i18next'; 
function Nav() {
    const { t } = useTranslation();
  return (
 <aside className="nav-sidebar">
      <div>
        <div className="nav-header">
          <h1>SZYMON SOWULA</h1>
        
          <p className="subtitle">{t('subtitle')}</p> 
        </div>
        <ul className="nav-links">
         
          <li><a href="#o-mnie">{t('nav.about')}</a></li>
          <li><a href="#projekty">{t('nav.projects')}</a></li>
          <li><a href="#edukacja">{t('nav.education')}</a></li>
          <li><a href="#kursy">{t('nav.courses')}</a></li>
        </ul>
      </div>
      <footer className="nav-footer">
        <a 
          href="https://github.com/SzymonnSowula" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          GitHub
        </a>
        <a 
          href="https://www.facebook.com/szymon665519" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          Facebook
        </a>
       
      </footer>
    </aside>
  )
}

export default Nav