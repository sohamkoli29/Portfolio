import { useState, type ChangeEvent, type MouseEvent, type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram,
  Send, User, MessageSquare, Clock, CheckCircle
} from 'lucide-react';
import emailjs from 'emailjs-com';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfoItem {
  icon: JSX.Element;
  title: string;
  value: string;
  link: string | null;
}

interface SocialLink {
  icon: JSX.Element;
  url: string;
  label: string;
}

const Contact = (): JSX.Element => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError(t('errorMsg'));
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const serviceId = 'service_o3y3uvq';
      const templateId = 'template_b66h6m3';
      const userId = 'QlyYA42Kz5EE2fckC';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        userId
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Failed to send message:', err);
      setError(t('errorReq'));
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfoItem[] = [
    { icon: <Mail size={24} />, title: t('contactTitles.0'), value: t('contactValues.0'), link: 'mailto:sohamkoli29@gmail.com' },
    { icon: <Phone size={24} />, title: t('contactTitles.1'), value: t('contactValues.1'), link: 'tel:+917058260905' },
    { icon: <MapPin size={24} />, title: t('contactTitles.2'), value: t('contactValues.2'), link: null }
  ];

  const socialLinks: SocialLink[] = [
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/soham029/', label: 'LinkedIn' },
    { icon: <Github size={20} />, url: 'https://github.com/sohamkoli29', label: 'GitHub' },
    { icon: <Twitter size={20} />, url: 'https://x.com/SohamKoli2020', label: 'Twitter' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/mr_koli_boi', label: 'Instagram' }
  ];

  return (
    <div id='contact' className="contact-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">{t('contactHead')}</h1>
        <p className="hero-description">{t('contactDes')}</p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info-section">
          <div className="contact-cards">
            <h2 className="section-title">
              {t('contactSec')}
              <div className="title-underline"></div>
            </h2>
            <div className="contact-info-grid">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="contact-card"
                  onClick={() => item.link && window.open(item.link, '_blank')}
                >
                  <div className="contact-card-content">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-details">
                      <h3 className="contact-title">{item.title}</h3>
                      <p className="contact-value">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h3 className="social-title">{t('socialTitle')}</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          {isSubmitted && (
            <div className="success-message">
              <CheckCircle size={20} />
              <span>{t('successMsg')}</span>
            </div>
          )}

          {error && (
            <div className="error-message">
              <span>{error}</span>
            </div>
          )}

          <h2 className="section-title">
            {t('msgBtn')}
            <div className="title-underline"></div>
          </h2>

          <div className="contact-form">
            <div className="input-group">
              <div className="input-icon"><User size={20} /></div>
              <input
                type="text"
                name="name"
                placeholder={t('name')}
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="input-group">
              <div className="input-icon"><Mail size={20} /></div>
              <input
                type="email"
                name="email"
                placeholder={t('email')}
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="input-group">
              <div className="input-icon"><MessageSquare size={20} /></div>
              <input
                type="text"
                name="subject"
                placeholder={t('subject')}
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="textarea-group">
              <textarea
                name="message"
                placeholder={t('textAera')}
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <>
                  <Clock size={20} className="spinning" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  {t('msgBtn')}
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Response Section */}
      <div className="response-section">
        <div className="response-content">
          <h3 className="response-title">{t('responseTitle')}</h3>
          <p className="response-description">{t('responseDes')}</p>
          <div className="response-time">
            <Clock size={20} />
            <span>{t('responseTime')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
