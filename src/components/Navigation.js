import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="navbar-brand" href="#">Logan Hildebrandt</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a
                  href="#about"
                  onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Projects"
                  onClick={() => handlePageChange('Projects')}
                  className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

      </nav>
    </div>

  );
}

export default Navigation;
