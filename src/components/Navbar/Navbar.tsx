// React hooks для состояния и эффектов
import { useEffect, useState } from "react";

// Иконки бургер-меню
import { FaBars, FaTimes } from "react-icons/fa";

// Переключатель темы (dark/light)
import ThemeToggle from "../ThemeToggle/ThemeToggle";

// Стили компонента
import "./Navbar.scss";

/**
 * Navbar — навигационная панель сайта
 * Отвечает за:
 * - навигацию по секциям
 * - активную подсветку раздела (scroll spy)
 * - мобильное меню
 */
function Navbar() {

  //  STATE 

  // Открыто ли мобильное меню
  const [mobileMenu, setMobileMenu] = useState(false);

  // Был ли скролл страницы (для эффекта blur/фон)
  const [scrolled, setScrolled] = useState(false);

  // Активная секция страницы (scroll spy)
  const [activeSection, setActiveSection] = useState("home");

  //  НАВИГАЦИЯ 
  const navLinks = [
    { id: "home", label: "Главная" },
    { id: "about", label: "Обо мне" },
    { id: "skills", label: "Навыки" },
    { id: "projects", label: "Проекты" },
    { id: "contact", label: "Контакты" },
  ];

  //  SCROLL EFFECT (blur navbar) 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  SCROLL SPY (активная секция) 
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleActiveSection = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const id = section.getAttribute("id");
        const offsetTop = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (
          id &&
          scrollY >= offsetTop &&
          scrollY < offsetTop + height
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  //  Закрытие мобильного меню по ESC 
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenu(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      aria-label="Основная навигация"
    >
      <div className="container navbar-container">

        {/*  LOGO  */}
        <a href="#home" className="logo">
          Yaroslav<span>Dev</span>
        </a>

        {/*  NAV LINKS  */}
        <div className={`nav-links ${mobileMenu ? "mobile-active" : ""}`}>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? "active-link" : ""}
              onClick={() => setMobileMenu(false)}
            >
              {link.label}
            </a>
          ))}

        </div>

        {/*  RIGHT SIDE  */}
        <div className="navbar-right">

          {/* Переключатель темы */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            className="menu-btn"
            aria-label="Открыть меню"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;