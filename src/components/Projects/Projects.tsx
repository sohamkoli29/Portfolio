import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './Projects.css';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: 'web' | 'mobile' | 'desktop' | 'other';
  features: string[];
}

const Projects: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Load projects from i18n
 const projects = (i18n.getResource('en', 'translation', 'projects') as ProjectData[])
  .filter((p) => p.status === 'completed');

  const openModal = (project: ProjectData) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">{t('projectsHead')}</h2>
          <p className="projects-subtitle">{t('projectsSub')}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-image-container">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="project-footer">
                  <span className="view-details">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="projects-note">
            <p>{t('projectsNote')}</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <div className="modal-content">
              <div className="modal-image-container">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>
              
              <div className="modal-details">
                <div className="modal-header">
                  <h3 className="modal-title">{selectedProject.title}</h3>
                </div>
                
                <p className="modal-description">
                  {selectedProject.longDescription}
                </p>
                
                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="modal-technologies">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="modal-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="modal-features">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-links">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link demo"
                    >
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link github"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
