// Анимации
import { motion } from "framer-motion";

// Стили
import "./About.scss";

// Компонент About
function About() {
  // Данные статистики
  const stats = [
    {
      number: "10+",
      label: "Учебных проектов",
    },

    {
      number: "5+",
      label: "Изученных технологий",
    },

    {
      number: "100%",
      label: "Адаптивный дизайн",
    },
  ];

  // Навыки
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "SCSS",
    "HTML5",
    "CSS3",
    "Git",
    "REST API",
    "Vite",
    "Vue.js",
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        {/* Заголовок секции */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">
            ОБО МНЕ
          </p>

          <h2 className="section-title">
            Frontend-разработчик,
            создающий современные интерфейсы
          </h2>
        </motion.div>

        {/* Основной контент */}
        <div className="about-grid">
          {/* Левая карточка */}
          <motion.div
            className="about-card glass-card"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Заголовок */}
            <h3>Кратко обо мне</h3>

            {/* Описание */}
            <p>
              Я  изучаю
              современные технологии веб-разработки
              и создаю адаптивные интерфейсы
              с использованием React, TypeScript
              и современных UI-подходов.
            </p>

            <p>
              Особое внимание уделяю качеству
              интерфейсов, UX/UI, анимациям,
              чистой архитектуре проекта и
              удобству взаимодействия пользователя
              с приложением.
            </p>

            <p>
              Активно развиваюсь в направлении
              frontend engineering и современных
              веб-технологий.
            </p>
          </motion.div>

          {/* Правая часть */}
          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Карточка навыков */}
            <div className="about-card glass-card">
              <h3>Технологии</h3>

              <div className="skills-list">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Карточка опыта */}
            <div className="about-card glass-card">
              <h3>Опыт и обучение</h3>

              <ul className="about-list">
                <li>
                  Разработка SPA приложений
                </li>

                <li>
                  Работа с REST API
                </li>

                <li>
                  Создание адаптивных интерфейсов
                </li>

                <li>
                  Изучение React и TypeScript
                </li>

                <li>
                  Работа с Git и GitHub
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Блок статистики */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="stat-card glass-card"
            >
              {/* Число */}
              <h3>{item.number}</h3>

              {/* Подпись */}
              <p>{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;