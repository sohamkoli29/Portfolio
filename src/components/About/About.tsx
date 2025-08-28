import './About.css';

import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { JSX } from 'react';

const About = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div id='about' className="about">
      <div className="about-head">
        <h1>{t('aboutHead')}</h1>
      </div>

      <div className="about-main">
        <div className="about-edu">
          <div className="about-cse">
            <h3>{t('aboutEduHead')}</h3>
            <br />
            <h3>{t('aboutEduH3')}</h3>
            <br />
            <p>
              {t('aboutProgram')} <br />
              {t('aboutCourse')}
            </p>
          </div>

          <div className="about-cf">
            <h3>{t('aboutCfHead')}</h3>
            <h3>{t('aboutCfH3')}</h3>
            <p>{t('aboutCfP')}</p>
          </div>
        </div>

        <div className="about-me">
          <div className="about-img">
            <img src="assets/about-id.png" alt="Soham Koli" />
          </div>
          <div className="about-name">
            <h2>{t('aboutName')}</h2>
          </div>
        </div>

        <div className="about-bio">
          <h3>{t('aboutBioH3')}</h3>
          <p>{t('aboutBioP')}</p>
          <a href="./Resume.pdf" download="Soham_Koli_Resume.pdf">
            <button className="about-btn">
              {t('aboutBtn')} <Download />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
