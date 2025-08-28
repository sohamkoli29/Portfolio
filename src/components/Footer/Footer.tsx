
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
