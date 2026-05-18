// Иконки
import {
  FaGithub,
  FaTelegramPlane,
  FaArrowUp,
} from "react-icons/fa";

// Стили
import "./Footer.scss";

// Компонент Footer
function Footer() {
  // Скролл наверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  // Навигация
  const navLinks = [
    {
      id: "home",
      label: "Главная",
    },

    {
      id: "about",
      label: "Обо мне",
    },

    {
      id: "skills",
      label: "Навыки",
    },

    {
      id: "projects",
      label: "Проекты",
    },

    {
      id: "contact",
      label: "Контакты",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Верхняя часть */}
        <div className="footer-top glass-card">
          {/* Левая часть */}
          <div className="footer-info">
            <h2>
              Yaroslav
              <span>Dev</span>
            </h2>

            <p>
              Frontend-разработчик,
              создающий современные,
              адаптивные и интерактивные
              веб-приложения.
            </p>
          </div>

          {/* Навигация */}
          <div className="footer-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Социальные сети */}
          <div className="footer-socials">
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
              <FaTelegramPlane />
            </a>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="footer-bottom">
          <p>
            © 2026 YaroslavDev.
            Все права защищены.
          </p>

          {/* Кнопка наверх */}
          <button
            className="scroll-top"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;