import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Nav = () => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      {/* Navigation */}
      <nav 
        className="nav-floating"
        style={{
          position: 'relative',
          margin: '2rem auto',
          zIndex: 100,
          background: 'rgba(18, 18, 18, 0.95)',
          // Remove heavy backdrop-filter on mobile
          backdropFilter: window.innerWidth > 768 ? 'blur(12px)' : 'none',
          padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)',
          borderRadius: '100px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          gap: 'clamp(0.75rem, 2vw, 2rem)',
          alignItems: 'center',
          maxWidth: 'calc(100vw - 4rem)',
          width: 'fit-content'
        }}
      >
        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--color-text-main)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            lineHeight: 1
          }}
          className="hamburger-btn"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: 'clamp(0.75rem, 2vw, 2rem)', alignItems: 'center' }}>
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{
                color: 'var(--color-text-main)',
                fontWeight: 500,
                fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                opacity: 0.8,
                transition: 'opacity 0.2s',
                whiteSpace: 'nowrap'
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
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
              borderRadius: '100px',
              fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {i18n.language === 'pl' ? 'EN' : 'PL'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              zIndex: 99,
              display: 'none'
            }}
            className="mobile-menu-overlay"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '80%',
              maxWidth: '300px',
              background: 'var(--color-surface)',
              zIndex: 101,
              padding: '2rem',
              display: 'none',
              flexDirection: 'column',
              gap: '1.5rem',
              borderLeft: '1px solid var(--color-border)'
            }}
            className="mobile-menu"
          >
            <button
              onClick={closeMenu}
              style={{
                alignSelf: 'flex-end',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-text-main)',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: 0,
                lineHeight: 1
              }}
            >
              ✕
            </button>

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                style={{
                  color: 'var(--color-text-main)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--color-border)',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-main)'}
              >
                {link.name}
              </a>
            ))}

            {/* Language Switcher in Mobile Menu */}
            <button
              onClick={() => {
                toggleLanguage()
                closeMenu()
              }}
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-bg)',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '100px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: 'auto'
              }}
            >
              {i18n.language === 'pl' ? 'Switch to English' : 'Przełącz na Polski'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-floating {
            position: fixed !important;
            top: 1rem !important;
            right: 1rem !important;
            left: auto !important;
            margin: 0 !important;
            width: auto !important;
            padding: 0.75rem !important;
          }
          
          .desktop-nav {
            display: none !important;
          }
          
          .hamburger-btn {
            display: block !important;
          }
          
          .mobile-menu-overlay {
            display: block !important;
          }
          
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}

export default Nav
