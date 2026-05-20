// Анимации
import { motion } from "framer-motion";

// Иконки
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaVuejs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiSass,
  SiVite,
} from "react-icons/si";

// Стили
import "./Skills.scss";

// Уровни вместо процентов
const getLevel = (value: number) => {
  if (value >= 90) return "Senior";
  if (value >= 80) return "Middle+";
  if (value >= 70) return "Middle";
  return "Junior+";
};

// Компонент Skills
function Skills() {
  // Данные навыков
  const skills = [
    {
      name: "React",
      level: 85,
      icon: <FaReact />,
    },
    {
      name: "TypeScript",
      level: 75,
      icon: <SiTypescript />,
    },
    {
      name: "JavaScript",
      level: 85,
      icon: <FaJs />,
    },
    {
      name: "HTML5",
      level: 95,
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3 / SCSS",
      level: 90,
      icon: <FaCss3Alt />,
    },
    {
      name: "SASS",
      level: 85,
      icon: <SiSass />,
    },
    {
      name: "Git / GitHub",
      level: 80,
      icon: <FaGitAlt />,
    },
    {
      name: "Vue.js",
      level: 70,
      icon: <FaVuejs />,
    },
    {
      name: "Vite",
      level: 75,
      icon: <SiVite />,
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">

        {/* Заголовок */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">
            НАВЫКИ
          </p>

          <h2 className="section-title">
            Уровень владения технологиями
            (Junior → Senior)
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              {/* TOP */}
              <div className="skill-top">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div>
                  <h3>{skill.name}</h3>

                  <p className="skill-level-text">
                    {getLevel(skill.level)}
                  </p>
                </div>

                <span className="skill-level-badge">
                  {getLevel(skill.level)}
                </span>
              </div>

              {/* PROGRESS */}
              <div className="progress-bar">
                <motion.div
                  className="progress-line"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;