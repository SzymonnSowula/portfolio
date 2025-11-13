import React from 'react'
import Section from './Section'

// Twoje umiejętności
const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React',
  'React Native', 'Next.js', 'Tailwind CSS', 'Supabase',
  'MongoDB', 'SQL', 'PHP','Shopify'
];

function About() {
  return (
    <Section title="O Mnie" id="o-mnie">
      <p className="about-text">
        Cześć, jestem Szymon. Mam 18 lat i jestem pasjonatem programowania, 
        specjalizującym się w technologiach front-endowych. 
        Tworzenie czystych, wydajnych i estetycznych aplikacji webowych to moja główna domena.
      </p>
      <p className="about-text">
        Obecnie jestem w 4. klasie na kierunku Technik Programista w 
        Zespole Szkół Nr 3 im. Antoniego Kocjana. 
        Każdego dnia poszerzam swoją wiedzę i szukam nowych wyzwań, 
        aby stawać się lepszym deweloperem.
      </p>
      
      <h3>Technologie, z którymi pracuję:</h3>
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