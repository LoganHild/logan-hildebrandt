import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light">
        <h1 className="navbar-brand" id="nav-title">Logan Hildebrandt</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span id="toggle"><i className="fas fa-bars"></i></span>
        </button>
        <div className="navbar-expand-lg" id="navbarText">
          <ul id="toggle-nav" className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                href="#about"
                id="about-link"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About Me
                <i className="far fa-address-card"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                id="project-link"
                href="#Projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
                <i className="fas fa-project-diagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                id="resume-link"
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
                <i className="far fa-file"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                id="contact-link"
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
                <i className="fas fa-address-book"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>          
    </div>

  );
}

export default Navigation;
