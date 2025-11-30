import React, { memo } from 'react'
import Section from './Section'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ProjectCard = memo(({ title, description, tags, link, color }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-new"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      style={{
        display: 'block',
        background: 'var(--color-surface)',
        borderRadius: '24px',
        padding: 'clamp(1.5rem, 4vw, 3rem)',
        border: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        marginBottom: '2rem',
        willChange: 'transform'
      }}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '1.5rem',
          gap: '1rem'
        }}>
          <h3 style={{ 
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
            color: 'var(--color-text-main)',
            margin: 0
          }}>
            {title}
          </h3>
          <div style={{
            background: 'var(--color-surface-hover)',
            padding: 'clamp(0.75rem, 2vw, 1rem)',
            borderRadius: '50%',
            border: '1px solid var(--color-border)',
            minWidth: 'clamp(2.5rem, 5vw, 3.5rem)',
            height: 'clamp(2.5rem, 5vw, 3.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)'
          }}>
            ↗
          </div>
        </div>
        
        <p style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
          color: 'var(--color-text-muted)', 
          marginBottom: '2rem',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          {description}
        </p>

        <div style={{ display: 'flex', gap: 'clamp(0.5rem, 1.5vw, 1rem)', flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
              borderRadius: '100px',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-main)',
              fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Gradient Glow Effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-10%',
        transform: 'translateY(-50%)',
        width: 'clamp(200px, 50vw, 400px)',
        height: 'clamp(200px, 50vw, 400px)',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0.1,
        filter: 'blur(60px)',
        zIndex: 1
      }} />
    </motion.a>
  )
})

ProjectCard.displayName = 'ProjectCard'

const Projects = () => {
  const { t } = useTranslation()

  const projects = [
    {
      title: t('projects.wizerunkowo.title'),
      description: t('projects.wizerunkowo.description'),
      tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe","google-auth","better-auth"],
      link: "https://wizerunkowo.netlify.app/",
      color: "#0f0bf5ff"
    },
    {
      title: t('projects.whop.title'),
      description: t('projects.whop.description'),
      tags: ["Next.js", "Whop SDK", "OAuth", "TypeScript", "Stripe"],
      link: "#",
      color: "#8b5cf6"
    },
    {
      title: t('projects.lifequest.title'),
      description: t('projects.lifequest.description'),
      tags: ["React", "Supabase", "Node.js"],
      link: "https://v0-life-quest-6dsyuk.vercel.app/",
      color: "#ffffffff"
    },
    {
      title: t('projects.streamline.title'),
      description: t('projects.streamline.description'),
      tags: ["React", "Node.js"],
      link: "https://2bbe5dppoq5r0h6l.vercel.app/",
      color: "#ec4899"
    },
    {
      title: t('projects.freeai.title'),
      description: t('projects.freeai.description'),
      tags: ["React", "Xenova Transformer", "Node.js", "Tailwind"],
      link: "https://freeaisite.netlify.app/",
      color: "#10b981"
    },
  ]

  return (
    <Section id="projects" title={t('projects.title')}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default memo(Projects)