import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Achievements.css';

interface AchievementData {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'participation' | 'completion' | 'project';
  imageUrl?: string;
}

const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementData | null>(null);

  
    const { i18n, t } = useTranslation();
const achievements = i18n.getResource('en', 'translation','achievements') as AchievementData[];
    

  const openModal = (achievement: AchievementData) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <div className="achievements-header">
          <h2 className="achievements-title">{t('achievementsHead')}</h2>
          <p className="achievements-subtitle">
           {t('achievementsSub')}
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`achievement-card ${achievement.type}`}
              onClick={() => openModal(achievement)}
            >
              {achievement.imageUrl && (
                <div className="achievement-image-container">
                  <img
                    src={achievement.imageUrl}
                    alt={achievement.title}
                    className="achievement-image"
                  />
                  <div className="achievement-overlay">
                    <span className="view-achievement">View Details</span>
                  </div>
                </div>
              )}
              
              <div className="achievement-content">
                <div className="achievement-type-badge">
                  {achievement.type}
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-organization">{achievement.organization}</p>
                <p className="achievement-date">{achievement.date}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <div className="achievement-modal-overlay" onClick={closeModal}>
          <div className="achievement-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <div className="modal-content">
              {selectedAchievement.imageUrl && (
                <div className="modal-image-container">
                  <img
                    src={selectedAchievement.imageUrl}
                    alt={selectedAchievement.title}
                    className="modal-image"
                  />
                </div>
              )}
              
              <div className="modal-details">
                <div className="modal-type-badge">
                  {selectedAchievement.type}
                </div>
                <h3 className="modal-title">{selectedAchievement.title}</h3>
                <p className="modal-organization">
                  {selectedAchievement.organization}
                </p>
                <p className="modal-date">{selectedAchievement.date}</p>
                
                <p className="modal-description">
                  {selectedAchievement.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;