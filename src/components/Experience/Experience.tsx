import React, { useState } from 'react';
import './Experience.css';
import { useTranslation } from 'react-i18next';

interface ExperienceData {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'internship' | 'freelance' ;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null);

  // Experience data
  const experiences = t('experiences', { returnObjects: true }) as ExperienceData[];
  const openModal = (experience: ExperienceData) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="experience-header">
          <h2 className="experience-title">{t('experienceHead')}</h2>
          <p className="experience-subtitle">
            {t('experienceSub')}
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-item ${exp.type}`}
              onClick={() => openModal(exp)}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="experience-card">
                <div className="experience-header-card">
                  <div className="experience-title-group">
                    <h3 className="experience-job-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                  <div className="experience-duration">
                    <span className="duration-badge">{exp.duration}</span>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                </div>
                
                <div className="experience-content">
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="experience-highlights">
                    <div className="responsibilities-preview">
                      <h4>Key Responsibilities:</h4>
                      <ul>
                        {exp.responsibilities.slice(0, 2).map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                        {exp.responsibilities.length > 2 && (
                          <li className="more-items">
                            +{exp.responsibilities.length - 2} more...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="technologies-used">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {exp.technologies.slice(0, 5).map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                      {exp.technologies.length > 5 && (
                        <span className="tech-tag more">
                          +{exp.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="experience-footer">
                  <span className="view-details">View Full Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <div className="experience-modal-overlay" onClick={closeModal}>
          <div className="experience-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">{selectedExperience.title}</h3>
                <p className="modal-company">{selectedExperience.company}</p>
                <div className="modal-meta">
                  <span className="modal-location">{selectedExperience.location}</span>
                  <span className="modal-duration">{selectedExperience.duration}</span>
                </div>
                <span className={`modal-type-badge ${selectedExperience.type}`}>
                  {selectedExperience.type}
                </span>
              </div>
              
              <div className="modal-body">
                <div className="modal-section">
                  <h4>Overview</h4>
                  <p className="modal-description">{selectedExperience.description}</p>
                </div>
                
                <div className="modal-section">
                  <h4>Responsibilities</h4>
                  <ul className="modal-responsibilities">
                    {selectedExperience.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-section">
                  <h4>Technologies & Tools</h4>
                  <div className="modal-technologies">
                    {selectedExperience.technologies.map((tech, index) => (
                      <span key={index} className="modal-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedExperience.achievements && (
                  <div className="modal-section">
                    <h4>Key Achievements</h4>
                    <ul className="modal-achievements">
                      {selectedExperience.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;