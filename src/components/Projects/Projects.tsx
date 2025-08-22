import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

import project2 from '../../assets/project2.png';

type ActiveCardsState = {
  project1: boolean;
  project2: boolean;
};

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const [activeCards, setActiveCards] = useState<ActiveCardsState>({
    project1: false,
    project2: false,
  });

  const toggleButton = (projectKey: keyof ActiveCardsState) => {
    setActiveCards((prevState) => ({
      ...prevState,
      [projectKey]: !prevState[projectKey],
    }));
  };

  const handleViewProject = (projectUrl: string) => {
    window.open(projectUrl, '_blank');
  };

  const handleViewSourceCode = (sourceUrl: string) => {
    window.open(sourceUrl, '_blank');
  };

  return (
    <div id='projects' className="projects">
      <div className="projects-head">
        <h1>{t('projectHead')}</h1>
      </div>

      <div className="projects-main">


        {/* Project 2 Card */}
        <div className={`projects-card ${activeCards.project2 ? 'start' : ''}`}>
          <div className="projects-content">
            <img src={project2} alt="healthcare" />
            <button className="learnM-btn" onClick={() => toggleButton('project2')}>
              {activeCards.project2 ? 'Close' : 'Learn More'}
            </button>
            <h2>{t('projects')}</h2>
            <p className={activeCards.project2 ? 'start' : ''}>
              {t('projectHealth')}
            </p>
            <div className={`project-actions ${activeCards.project2 ? 'show' : ''}`}>
              <button
                className="action-btn view-project-btn"
                onClick={() =>
                  handleViewProject(
                    'http://medimapper.gt.tc/'
                  )
                }
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
