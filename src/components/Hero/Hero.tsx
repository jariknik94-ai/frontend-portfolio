// Анимации
import { motion } from "framer-motion";

// Иконки
import {
  FaGithub,
  FaTelegram,
} from "react-icons/fa";

// Стили
import "./Hero.scss";

// Hero section
function Hero() {
  return (
    <section id="home" className="hero">
      {/* Glow background */}
      <div className="hero-blur hero-blur-1"></div>
      <div className="hero-blur hero-blur-2"></div>

      <div className="container hero-container">
        {/* Левая часть */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <div className="hero-badge glass-card">
            Frontend Developer
          </div>

          {/* Заголовок */}
          <h1 className="hero-title">
            Создаю современные
            <span> веб-интерфейсы</span>
          </h1>

          {/* Описание */}
          <p className="hero-description">
            Frontend-разработчик, специализирующийся
            на React, TypeScript и создании современных,
            адаптивных и интерактивных веб-приложений
            с качественным UI/UX дизайном.
          </p>

          {/* Кнопки */}
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Мои проекты
            </button>

            <button className="btn hero-outline-btn">
              Связаться
            </button>
          </div>

          {/* Социальные сети */}
          <div className="hero-socials">
            <a
              href="https://github.com/jariknik94-ai"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a href="https://t.me/bikkoper" 
            target="_blank" 
            rel="noreferrer">
              <FaTelegram />
            </a>
          </div>
        </motion.div>

        {/* Правая карточка */}
        <motion.div
          className="hero-card glass-card"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="code-window">
            {/* Верхняя панель */}
            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Код */}
            <div className="code-content">
              <p>
                const developer = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;имя:
                "Ярослав",
              </p>

              <p>
                &nbsp;&nbsp;стек:
                ["React", "TypeScript"],
              </p>

              <p>
                &nbsp;&nbsp;направление:
                "Frontend",
              </p>

              <p>
                &nbsp;&nbsp;интерес:
                "UI/UX",
              </p>

              <p>
                &nbsp;&nbsp;статус:
                "Open to work"
              </p>

              <p>{"};"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;