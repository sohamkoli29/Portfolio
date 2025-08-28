import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  // Dynamic role rotation
  const roles = [
    t('roleFullStack') || 'Full Stack Developer',
    t('roleFrontend') || 'Frontend Developer',
    t('roleBackend') || 'Backend Developer',
    t('roleReact') || 'React Developer'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Role rotation interval
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="home">
      {/* Background decorations */}
      <div className="home-bg-decoration"></div>
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="home-container">
        {/* Main content */}
        <div className={`home-content ${isVisible ? 'animate' : ''}`}>
          {/* Greeting */}
          <div className="home-greeting">
            <span className="greeting-text">{t('greeting') }</span>
          </div>

          {/* Main heading */}
          <div className="home-head">
            <h1 className="main-title">
              {t('homeHead') }
            </h1>
          </div>

          {/* Dynamic role display */}
          <div className="home-role">
            <span className="role-prefix">{t('rolePrefix') }</span>
            <span className="dynamic-role" key={currentRole}>
              {roles[currentRole]}
            </span>
          </div>

          {/* Description text */}
          <div className="home-text">
            <p>
              {t('homeText')}
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="home-cta">
            <button 
              className="cta-primary"
              onClick={() => scrollToSection('projects')}
            >
              {t('viewWork') }
            </button>
            <button 
              className="cta-secondary"
              onClick={() => scrollToSection('contact')}
            >
              {t('getInTouch') }
            </button>
          </div>

          {/* Social links */}
          <div className="home-social">
            <a 
              href="https://github.com/sohamkoli29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/soham029" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:soham.koli23@pcu.edu.in" 
              className="social-link"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636C.732 21.002 0 20.27 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <div className="scroll-arrow" onClick={() => scrollToSection('about')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <span className="scroll-text">{t('scrollDown') }</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;