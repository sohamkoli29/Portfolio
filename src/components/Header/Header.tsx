
import { useState, useEffect } from 'react';
import { ThemeToggle } from '../../ThemeProvider';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { t } = useTranslation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
     <a href="/" className="logoText" onClick={closeMobileMenu}>
  <h1>
    {t('logoFname')}
    <span style={{ color: '#00F2FF' }}>{t('logoLname')}</span>
  </h1>
</a>

        <ThemeToggle />
        <LanguageSwitcher />

        {/* Desktop Navigation */}
  <nav>
  <a className="links" href="#home">{t('navList.0')}</a>
  <a className="links" href="#about">{t('navList.1')}</a>
  <a className="links" href="#skills">{t('navList.2')}</a>
  <a className="links" href="#projects">{t('navList.3')}</a>
  <a className="links" href="#contact">{t('navList.4')}</a>
</nav>


        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
  <a className="links" href="#home" onClick={closeMobileMenu}>
    {t('navList.0')}
  </a>
  <a className="links" href="#about" onClick={closeMobileMenu}>
    {t('navList.1')}
  </a>
  <a className="links" href="#skills" onClick={closeMobileMenu}>
    {t('navList.2')}
  </a>
  <a className="links" href="#projects" onClick={closeMobileMenu}>
    {t('navList.3')}
  </a>
  <a className="links" href="#contact" onClick={closeMobileMenu}>
    {t('navList.4')}
  </a>
</div>

      </div>
    </>
  );
};

export default Header;
