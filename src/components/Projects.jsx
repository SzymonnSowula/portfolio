import React from 'react'
import Section from './Section'
import { useTranslation } from 'react-i18next'; 
const myProjects = [
  {
    title: "LifeQuest",
    description: "An application for tracking daily routines and setting goals. Connected to a Supabase database.",
    tech: ["React", "Supabase", "Node.js"], // Uzupełnij
    links: {
      github: "https://github.com/SzymonnSowula/...", // UZUPEŁNIJ
      live: "https://v0-life-quest-6dsyuk.vercel.app/"
    }
  },
  {
    title: "StreamLine",
    description: "Boost productivity and simplify your processes with our intuitive SaaS platform. Optimized for speed, security by design, and offers insightful analytics.",
    tech: ["React", "Node.js"], // Uzupełnij
    links: {
      github: "https://github.com/SzymonnSowula/...", // UZUPEŁNIJ
      live: "https://2bbe5dppoq5r0h6l.vercel.app/"
    }
  },
    {
    title: "FreeAi",
    description: "An AI tool that allows you to translate provided text into another language. Users can select the source and target languages.",
    tech: ["React", "Xenova Transformer modal", "Node.js", "Tailwindcss"], // Uzupełnij
    links: {
      github: "https://github.com/SzymonnSowula/...", 
      live: "https://freeaisite.netlify.app/"
    }
  },
  {
    title: "BeautyMania",
    description: "A professional beauty salon in Skała specializing in nail and eyelash styling. Created on behalf of a client.",
    tech: ["React", "Node.js"], // Uzupełnij
    links: {
      github: "https://github.com/SzymonnSowula/...", // UZUPEŁNIJ
      live: "https://beautymania.netlify.app/"
    }
  }
];

function Projects() {
   const { t } = useTranslation();
  return (
    <Section title={t('projects.title')} id="projekty">  
      <div className="projects-grid">
        {myProjects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{t(project.title)}</h3> 
            <div className="project-tech">
              {project.tech.map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
            <p className="project-description">{t(project.description)}</p>
            <div className="project-links">
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                {t('projects.github')}
              </a>
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  {t('projects.live')}
                </a>
              )}
            </div>
          </article>
        ))} 
      </div>
    </Section>
  )
}

export default Projects