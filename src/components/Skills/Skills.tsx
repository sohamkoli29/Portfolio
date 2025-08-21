import { useEffect } from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';

interface Skill {
  skill: string;
  level: number;
}

const Skills = () => {
  const { t } = useTranslation();

  const SkillData: Skill[] = [
    { skill: t('skills.0'), level: 95 },
    { skill: t('skills.1'), level: 90 },
    { skill: t('skills.2'), level: 80 },
    { skill: t('skills.3'), level: 80 },
    { skill: t('skills.4'), level: 60 },
    { skill: t('skills.5'), level: 80 },
    { skill: t('skills.6'), level: 75 },
    { skill: t('skills.7'), level: 75 },
    { skill: t('skills.8'), level: 80 },
  ];

  useEffect(() => {
    const circles = document.querySelectorAll<SVGCircleElement>('.progress-ring');

    circles.forEach((circle) => {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const level = parseFloat(circle.dataset.level || '0');

      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;

      setTimeout(() => {
        circle.style.transition = 'stroke-dashoffset 1.5s ease-out';
        circle.style.strokeDashoffset = `${circumference - (level / 100) * circumference}`;
      }, 100);
    });
  }, []);

  return (
    <div id='skills' className="skills">
      <div className="skills-head">
        <h1>{t('skillsHead')}</h1>
      </div>
      <div className="skills-main">
        <ul>
          {SkillData.map((value, index) => (
            <li key={index}>
              <svg className="skill-card" height="300px" width="200px" viewBox="0 0 100 150">
                <circle
                  className="progress-ring"
                  data-level={value.level}
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="var(--color-cyan)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <text
                  x="50"
                  y="55"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                  fill="white"
                >
                  {value.level}%
                </text>
                <text
                  className="ring-name"
                  x="50"
                  y="120"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                  fill="var(--color-white)"
                >
                  {value.skill}
                </text>
                <line x1="10" y1="125" x2="90" y2="125" stroke="var(--color-white)"></line>
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
