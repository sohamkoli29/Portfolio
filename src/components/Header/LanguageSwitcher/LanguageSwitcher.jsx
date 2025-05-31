// LanguageSwitcher.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Uncomment when using react-i18next
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  // For demo purposes - replace with actual useTranslation hook
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const languages = [
    { 
      code: 'en', 
      name: 'English', 
      nativeName: 'English',
      flag: '🇺🇸'
    },
    { 
      code: 'hi', 
      name: 'Hindi', 
      nativeName: 'हिन्दी',
      flag: '🇮🇳'
    },
    { 
      code: 'mr', 
      name: 'Marathi', 
      nativeName: 'मराठी',
      flag: '🇮🇳'
    },
   
    {
       code: 'es',
       name: 'Spanish',
       nativeName: 'Español',
       flag: '🇪🇸'
     },
     {
       code: 'fr',
       name: 'French',
       nativeName: 'Français',
       flag: '🇫🇷'
     },
     {
      code: 'ar',
      name: 'Arabic',
      nativeName: 'العربية',
      flag: '🇦🇪'
      }

  ];

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    setIsOpen(false);
    
    // Uncomment and use this with react-i18next
    i18n.changeLanguage(langCode);
    
    // Optional: Save to localStorage
    localStorage.setItem('preferredLanguage', langCode);
    
    console.log(`Language changed to: ${langCode}`);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && 
          !dropdownRef.current.contains(event.target) &&
          !buttonRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
      
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        if (event.target === buttonRef.current) {
          setIsOpen(!isOpen);
        }
      }
      
      // Arrow key navigation
      if (isOpen && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault();
        const options = dropdownRef.current?.querySelectorAll('.language-switcher__option');
        if (!options) return;
        
        const currentIndex = Array.from(options).findIndex(option => 
          option === document.activeElement
        );
        
        let nextIndex;
        if (event.key === 'ArrowDown') {
          nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        }
        
        options[nextIndex]?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', handleScroll, true);
      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('scroll', handleScroll, true);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      // Focus first option when dropdown opens
      const firstOption = dropdownRef.current?.querySelector('.language-switcher__option');
      firstOption?.focus();
    }
  }, [isOpen]);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="language-switcher">
      {/* Dropdown Button */}
      <button
        ref={buttonRef}
        className={`language-switcher__button ${isOpen ? 'language-switcher__button--open' : ''}`}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
          }
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Current language: ${currentLang?.nativeName || 'English'}. Click to change language`}
        type="button"
      >
        <div className="language-switcher__button-content">
          <Globe 
            size={16} 
            className="language-switcher__icon"
            aria-hidden="true"
          />
          <span className="language-switcher__current-lang">
            {currentLang?.nativeName || 'English'}
          </span>
          <ChevronDown 
            size={14} 
            className={`language-switcher__chevron ${isOpen ? 'language-switcher__chevron--open' : ''}`}
            aria-hidden="true"
          />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div 
            ref={dropdownRef}
            className="language-switcher__dropdown"
            role="listbox"
            aria-label="Language options"
          >
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                className={`language-switcher__option ${
                  currentLanguage === lang.code ? 'language-switcher__option--active' : ''
                }`}
                onClick={() => changeLanguage(lang.code)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    changeLanguage(lang.code);
                  }
                }}
                role="option"
                aria-selected={currentLanguage === lang.code}
                aria-label={`Select ${lang.nativeName} (${lang.name})`}
                tabIndex={-1}
                type="button"
              >
                <span 
                  className="language-switcher__flag"
                  aria-hidden="true"
                >
                  {lang.flag}
                </span>
                
                <div className="language-switcher__lang-info">
                  <div className="language-switcher__native-name">
                    {lang.nativeName}
                  </div>
                  <div className="language-switcher__english-name">
                    {lang.name}
                  </div>
                </div>
                
                {currentLanguage === lang.code && (
                  <div 
                    className="language-switcher__indicator"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Overlay */}
          <div 
            className="language-switcher__overlay"
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;