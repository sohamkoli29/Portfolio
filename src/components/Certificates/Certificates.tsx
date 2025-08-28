import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Certificates.css';




interface CertificateData {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
  verificationUrl?: string;
  skills: string[];
}

const Certificates: React.FC = () => {
  const { i18n,t } = useTranslation();

  const [selectedCertificate, setSelectedCertificate] = useState<CertificateData | null>(null);

  // Sample certificate data
const certificates = i18n.getResource('en', 'translation', 'certificates') as CertificateData[];  const openModal = (certificate: CertificateData) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="certificate-section" id="certificates">
      <div className="container">
        <div className="certificate-header">
          <h2 className="certificate-title">{t('certificatesHead')}</h2>
          <p className="certificate-subtitle">
            {t('certificatesSub')}
          </p>
        </div>

        <div className="certificate-grid">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificate-card"
              onClick={() => openModal(cert)}
            >
              <div className="certificate-image-container">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <span className="view-certificate">View Certificate</span>
                </div>
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-card-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
                
                <div className="certificate-skills">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="skill-tag more">+{cert.skills.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div className="certificate-modal-overlay" onClick={closeModal}>
          <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <div className="modal-content">
              <div className="modal-image-container">
                <img
                  src={selectedCertificate.imageUrl}
                  alt={selectedCertificate.title}
                  className="modal-image"
                />
              </div>
              
              <div className="modal-details">
                <h3 className="modal-title">{selectedCertificate.title}</h3>
                <p className="modal-issuer">Issued by {selectedCertificate.issuer}</p>
                <p className="modal-date">Completed in {selectedCertificate.date}</p>
                
                <p className="modal-description">
                  {selectedCertificate.description}
                </p>
                
                <div className="modal-skills">
                  <h4>Skills Covered:</h4>
                  <div className="modal-skills-list">
                    {selectedCertificate.skills.map((skill, index) => (
                      <span key={index} className="modal-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedCertificate.verificationUrl && (
                  <a
                    href={selectedCertificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-button"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;