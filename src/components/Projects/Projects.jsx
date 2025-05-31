import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png'

const Projects = () => {
  const {t} = useTranslation();
  // Use an array of booleans or an object to track each card separately
  const [activeCards, setActiveCards] = useState({
    project1: false,
    project2: false,
  });

  const toggleButton = (projectKey) => {
    setActiveCards((prevState) => ({
      ...prevState,
      [projectKey]: !prevState[projectKey],
    }));
  };

  const handleViewProject = (projectUrl) => {
    window.open(projectUrl, '_blank');
  };

  const handleViewSourceCode = (sourceUrl) => {
    window.open(sourceUrl, '_blank');
  };

  return (
    <div className="projects">
      <div className="projects-head">
        <h1>{t('projectHead')}</h1>
      </div>

      <div className="projects-main">
        {/* Project 1 Card */}
        <div className={`projects-card ${activeCards.project1 ? 'start' : ''}`}>
          <div className="projects-content">
            <img src={project1} alt="portfolio-3d" />
            <button className="learnM-btn" onClick={() => toggleButton('project1')}>
              {activeCards.project1 ? 'Close' : 'Learn More'}
            </button>
            <h2>
              {t('projects.0')}
            </h2>
            <p className={activeCards.project1 ? 'start' : ''}>
              {t('projectPort')}
            </p>
            {/* Project Action Buttons */}
            <div className={`project-actions ${activeCards.project1 ? 'show' : ''}`}>
              <button 
                className="action-btn view-project-btn"
                onClick={() => handleViewProject('https://sohamkoli.netlify.app/')}
              >
              {t('viewBtn')}
              </button>
              <button 
                className="action-btn view-source-btn"
                onClick={() => handleViewSourceCode('https://github.com/sohamkoli29/Portfolio')}
              >
              {t('sourceBtn')}
              </button>
            </div>
          </div>
        </div>

        {/* Project 2 Card */}
        <div className={`projects-card ${activeCards.project2 ? 'start' : ''}`}>
          <div className="projects-content">
            <img src={project2} alt="healthcare" />
            <button className="learnM-btn" onClick={() => toggleButton('project2')}>
              {activeCards.project2 ? 'Close' : 'Learn More'}
            </button>
            <h2>
              {t('projects.1')}
            </h2>
            <p className={activeCards.project2 ? 'start' : ''}> 
              {t('projectHealth')}
            </p>
            {/* Project Action Buttons */}
            <div className={`project-actions ${activeCards.project2 ? 'show' : ''}`}>
              <button 
                className="action-btn view-project-btn"
                onClick={() => handleViewProject('https://drive.google.com/file/d/1LZuPQGXTn6RBGxsYvtBpcM_WP9Vp-W1k/view?usp=sharing')}
              >
                {t('viewBtn')}
              </button>
              <button 
                className="action-btn view-source-btn"
                onClick={() => handleViewSourceCode('https://github.com/sohamkoli29/MediMapper')}
              >
                {t('sourceBtn')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;