import React from 'react'
import Section from './Section'

// UZUPEŁNIJ WŁASNYMI KURSAMI
const myCourses = [
  {
    title: "Przykładowy Kurs np. 'Advanced React'",
    issuer: "Udemy / Coursera / Inna platforma",
    date: "2024"
  },
  {
    title: "Certyfikat np. 'JavaScript Algorithms and Data Structures'",
    issuer: "freeCodeCamp",
    date: "2023"
  }
];

function Courses() {
  return (
    <Section title="Kursy i Certyfikaty" id="kursy">
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