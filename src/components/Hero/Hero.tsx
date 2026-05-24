// Анимации Framer Motion для появления элементов
import { motion } from "framer-motion";

// Иконки соцсетей
import { FaGithub, FaTelegram } from "react-icons/fa";

// Стили компонента
import "./Hero.scss";

/**
 * Hero — главный экран портфолио
 * Здесь формируется первое впечатление о разработчике
 */
function Hero() {
  return (
    // Главная секция (якорь для скролла)
    <section id="home" className="hero" aria-label="Главный экран портфолио">

      {/* Декоративные фоновые glow-элементы */}
      <div className="hero-blur hero-blur-1" />
      <div className="hero-blur hero-blur-2" />

      <div className="container hero-container">

        {/* Левая часть — текст и CTA */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Роль / бейдж */}
          <div className="hero-badge glass-card">
            Frontend Developer
          </div>

          {/* Основной заголовок */}
          <h1 className="hero-title">
            Создаю современные <span>веб-интерфейсы</span>
          </h1>

          {/* Описание */}
          <p className="hero-description">
            Frontend-разработчик, специализирующийся на React и TypeScript.
            Создаю адаптивные, интерактивные интерфейсы с акцентом на UX/UI.
          </p>

          {/* CTA кнопки (главное действие + вторичное) */}
          <div className="hero-buttons">

            {/* Основное действие (главная цель страницы) */}
            <a
              href="#projects"
              className="btn btn-primary"
              aria-label="Перейти к проектам"
            >
              Посмотреть проекты
            </a>

            {/* Вторичное действие */}
            <a
              href="#contact"
              className="btn hero-outline-btn"
              aria-label="Перейти к форме контакта"
            >
              Связаться
            </a>

          </div>

          {/* Социальные сети */}
          <div className="hero-socials" aria-label="Социальные сети">

            <a
              href="https://github.com/jariknik94-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub профиль"
            >
              <FaGithub />
            </a>

            <a
              href="https://t.me/bikkoper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram профиль"
            >
              <FaTelegram />
            </a>

          </div>

        </motion.div>

        {/* Правая часть — декоративный code блок */}
        <motion.div
          className="hero-card glass-card"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="code-window">

            {/* Верхняя панель (как в IDE) */}
            <div className="window-top">
              <span />
              <span />
              <span />
            </div>

            {/* Код-представление профиля */}
            <div className="code-content">
              <p>const developer = {"{"}</p>
              <p>&nbsp;&nbsp;name: "Yaroslav",</p>
              <p>&nbsp;&nbsp;stack: ["React", "TypeScript"],</p>
              <p>&nbsp;&nbsp;role: "Frontend Developer",</p>
              <p>&nbsp;&nbsp;focus: "UI/UX",</p>
              <p>&nbsp;&nbsp;status: "Open to work"</p>
              <p>{"};"}</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;