
import './Skills.css';
import { useTranslation } from 'react-i18next';

interface Skill {
  skill: string;
  icon: string; // path to icon image
}

const Skills = () => {
  const { t } = useTranslation();

  const SkillData: Skill[] = [
    { skill: t('skills.0'), icon: 'https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000' },
    { skill: t('skills.1'), icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
    { skill: t('skills.2'), icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
    { skill: t('skills.3'), icon: 'https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000' },
    { skill: t('skills.4'), icon: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000' },
    { skill: t('skills.5'), icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000' },
    { skill: t('skills.6'), icon: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000' },
    { skill: t('skills.7'), icon: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000' },
    { skill: t('skills.8'), icon: 'https://img.icons8.com/?size=100&id=114334&format=png&color=000000' },
  ];

  // Duplicate the skills array to create seamless infinite scroll
  const duplicatedSkills = [...SkillData, ...SkillData];

  return (
    <div id='skills' className="skills">
      <div className="skills-head">
        <h1>{t('skillsHead')}</h1>
      </div>
      <div className="skills-main">
        <div className="skills-container">
          <div className="skills-track">
            {duplicatedSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">
                  <img 
                    src={skill.icon} 
                    alt={skill.skill}
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span style="color: var(--color-cyan); font-size: 24px; font-weight: bold;">${skill.skill.charAt(0)}</span>`;
                    }}
                  />
                </div>
                <div className="skill-name">
                  {skill.skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;