import './About.css';
import myImg from '../../assets/about-id.png';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation()
  return (
    <div className="about">
    <div className="about-head">
      <h1 >{t('aboutHead')}</h1>
      </div>
      <div className="about-main">
        
        <div className="about-edu">
          <div className="about-cse">
          <h3 >{t('aboutEduHead')}</h3><br />
          <h3>{t('aboutEduH3')}</h3><br />
          <p> {t('aboutProgram')} <br />{t('aboutCourse')}</p>
          </div>
          <div className="about-cf"> 
          <h3>{t('aboutCfHead')}</h3>
          <h3>{t('aboutCfH3')}</h3>
          <p>{t('aboutCfP')}</p>
          
          </div>
        </div>
        <div className="about-me">
          <div className="about-img">
            <img src={myImg} alt="Soham Koli" />
          </div>
          <div className="about-name">
            <h2>{t('aboutName')}</h2>
            </div>
        </div>
        <div className="about-bio">
          <h3>{t('aboutBioH3')} </h3>
          <p>{t('aboutBioP')}
      </p>
      <a href="./resume.pdf"  target="_blank" rel='noopener noreferrer'>
    <button className="about-btn">   {t('aboutBtn')} <Download/></button>
    </a>
        </div>
      </div>
    </div>
  )
}

export default About
