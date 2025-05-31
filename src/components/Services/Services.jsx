import { useTranslation } from 'react-i18next';
import { Code,Palette } from 'lucide-react';
import './Services.css'
const Services = () => {
  const {t} = useTranslation();
  return (
    <div className="services">
      <div className="services-head">
      <h1>{t('servicesHead')}</h1>
      </div>
      <div className="services-main">
      <div className="services-card">
        <div className="services-card-icon">
          <Code size={68}/>
          </div>
        <div className="services-card-title">
          <h2>{t("services.0")}</h2>
          </div>
        <div className="services-card-desc">
          <p>{t('servicesDev')}</p>
          </div>
      </div>
      <div className="services-card">
        
        <div className="services-card-icon">
          <Palette size={68}/>
          </div>
        <div className="services-card-title">
          <h2><br />{t('services.1')}</h2>
          </div>
        <div className="services-card-desc">
          <p>{t("servicesDes")}</p>
          </div>
          </div>
       
      </div>
    </div>
  )
}

export default Services
