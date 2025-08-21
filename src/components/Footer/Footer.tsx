import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPinHouse, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const { t } = useTranslation();

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear: number = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="footer-container">
          {/* Navigation Section */}
          <div className="footer-section">
            <h3>{t('nav')}</h3>
<div className="footer-links">
  <a href="#">{t('navList.0')}</a>
  <a href="#about">{t('navList.1')}</a>
  <a href="#skills">{t('navList.2')}</a>
  <a href="#projects">{t('navList.3')}</a>
  <a href="#contact">{t('navList.4')}</a>
</div>

          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h3>{t('servicesHead')}</h3>
            <div className="footer-links">
              <Link to="/services">{t('services.0')}</Link>
              <Link to="/services">{t('services.1')}</Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>{t('contactHead')}</h3>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><Mail /></div>
                <span>{t('contactValues.0')}</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Phone /></div>
                <span>{t('contactValues.1')}</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPinHouse /></div>
                <span>{t('contactValues.2')}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://www.linkedin.com/in/soham029/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Linkedin /></a>
              <a href="https://github.com/sohamkoli29" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><Github /></a>
              <a href="https://x.com/SohamKoli2020" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter"><Twitter /></a>
              <a href="https://www.instagram.com/mr_koli_boi" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><Instagram /></a>
            </div>
          </div>

          {/* About Section */}
          <div className="footer-section">
            <h3>{t('aboutHead')}</h3>
            <p style={{
              lineHeight: '1.6',
              opacity: 0.9,
              fontSize: '0.95rem',
              marginBottom: '20px'
            }}>
              {t('aboutFooter')}
            </p>
            <div className="footer-links">
              <Link to="/about">{t('story')}</Link>
              <Link to="/projects">{t('portfolio')}</Link>
              <Link to="/contact">{t('work')}</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © {currentYear} {t('rights')}
            </div>
            <div className="footer-brand">
              {t('logoFname')}<span>{t('logoLname')}</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a
        href="#top"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        aria-label="Back to top"
      >
        ↑
      </a>
    </>
  );
};

export default Footer;
