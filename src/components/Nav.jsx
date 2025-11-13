import React from 'react'

function Nav() {
  return (
    <aside className="nav-sidebar">
      <div>
        <div className="nav-header">
          <h1>SZYMON SOWULA</h1>
          <p className="subtitle">Web Developer</p>
        </div>
        <ul className="nav-links">
          <li><a href="#o-mnie">O mnie</a></li>
          <li><a href="#projekty">Projekty</a></li>
          <li><a href="#edukacja">Edukacja</a></li>
          <li><a href="#kursy">Kursy</a></li>
        </ul>
      </div>
      
      {/* ZAKTUALIZOWANA STOPKA Z LINKAMI SPOŁECZNOŚCIOWYMI */}
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