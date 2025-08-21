import { useTranslation } from 'react-i18next';
import './Home.css'
const Home = () => {
  const { t } = useTranslation();
  return (
    <div id='home' className="home">
      <div className="home-head">
        <h1>{t('homeHead')}</h1>
       </div>
        <div className="home-text">  
          <p>{t('homeText')}</p>
      </div>
    </div>
  )
}

export default Home;
