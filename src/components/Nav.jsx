import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Nav = () => {
  const { t, i18n } = useTranslation()

  const links = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pl' ? 'en' : 'pl'
    i18n.changeLanguage(newLang)
  }

  return (
    <motion.nav 
      className="nav-floating"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        background: 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(12px)',
        padding: '1rem 2rem',
        borderRadius: '100px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}
    >
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.href}
          style={{
            color: 'var(--color-text-main)',
            fontWeight: 500,
            fontSize: '0.9rem',
            opacity: 0.8,
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.opacity = 1}
          onMouseLeave={(e) => e.target.style.opacity = 0.8}
        >
          {link.name}
        </a>
      ))}
      
      {/* Language Switcher */}
      <button
        onClick={toggleLanguage}
        style={{
          background: 'var(--color-accent)',
          color: 'var(--color-bg)',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '100px',
          fontSize: '0.85rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'transform 0.2s',
          marginLeft: '0.5rem'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        {i18n.language === 'pl' ? 'EN' : 'PL'}
      </button>
    </motion.nav>
  )
}

export default Nav
