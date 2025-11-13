import React from 'react'
import Section from './Section'

function Education() {
  return (
    <Section title="Edukacja" id="edukacja">
      <ul className="item-list">
        <li className="list-item">
          <span className="item-date">2021 – 2025 (Oczekiwane)</span>
          <div className="item-title">Zespół Szkół Nr 3 im. Antoniego Kocjana</div>
          <div className="item-subtitle">Kierunek: Technik Programista (Klasa 4)</div>
        </li>
        {/* Możesz dodać tu więcej szkół w przyszłości */}
      </ul>
    </Section>
  )
}

export default Education