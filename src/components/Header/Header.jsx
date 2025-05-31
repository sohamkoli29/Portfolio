import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ThemeToggle } from '../../ThemeProvider';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher'
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscapeKey = (event) => {
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

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
        <Link to="/" className="logoText" onClick={closeMobileMenu}>
          <h1>
            {t('logoFname')}
            <span style={{ color: '#00F2FF' }}>{t('logoLname')}</span>
          </h1>
        </Link>
        <ThemeToggle />
        <LanguageSwitcher/>
        {/* Desktop Navigation */}
        <nav>
          <NavLink 
            className="links" 
            to="/"
            end
          >
            {t('navList.0')}
          </NavLink>
          <NavLink 
            className="links" 
            to="/about"
          >
            {t('navList.1')}
          </NavLink>
          <NavLink 
            className="links" 
            to="/skills"
          >
            {t('navList.2')}
          </NavLink>
          <NavLink 
            className="links" 
            to="/services"
          >
            {t('navList.3')}
          </NavLink>
          <NavLink 
            className="links" 
            to="/projects"
          >
            {t('navList.4')}
          </NavLink>
          <NavLink 
            className="links" 
            to="/contact"
          >
            {t('navList.5')}
          </NavLink>
          
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
          <NavLink 
            className="links" 
            to="/"
            onClick={closeMobileMenu}
            end
          >
            {t('navList.0')}
          </NavLink>
          <NavLink 
            className="links" 
            to="/about"
            onClick={closeMobileMenu}
          >
            {t('navList.1')}
          </NavLink>
          <NavLink 
            className="links" 
            to="/skills"
            onClick={closeMobileMenu}
          >
            {t('navList.2')}
          </NavLink>
          <NavLink 
            className="links" 
            to="/services"
            onClick={closeMobileMenu}
          >
            {t('navList.3')}
          </NavLink>
          <NavLink 
            className="links" 
            to="/projects"
            onClick={closeMobileMenu}
          >
            {t('navList.4')}
          </NavLink>
          <NavLink 
            className="links" 
            to="/contact"
            onClick={closeMobileMenu}
          >
            {t('navList.5')}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;