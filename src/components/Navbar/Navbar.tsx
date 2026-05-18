// React hooks
import { useEffect, useState } from "react";

// Иконки
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

// Theme toggle
import ThemeToggle from "../ThemeToggle/ThemeToggle";

// Стили
import "./Navbar.scss";

// Компонент Navbar
function Navbar() {
  // Состояние мобильного меню
  const [mobileMenu, setMobileMenu] =
    useState(false);

  // Состояние скролла
  const [scrolled, setScrolled] =
    useState(false);

  // Активная секция
  const [activeSection, setActiveSection] =
    useState("home");

  // Навигационные ссылки
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

  // Отслеживание скролла
  useEffect(() => {
    const handleScroll = () => {
      // Проверяем позицию скролла
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // Отслеживание активной секции
  useEffect(() => {
    const sections =
      document.querySelectorAll("section");

    const handleActiveSection = () => {
      sections.forEach((section) => {
        // Текущая позиция скролла
        const top = window.scrollY;

        // Смещение секции
        const offset =
          section.offsetTop - 150;

        // Высота секции
        const height =
          section.offsetHeight;

        // Получаем id секции
        const id =
          section.getAttribute("id");

        // Проверяем активную секцию
        if (
          top >= offset &&
          top < offset + height &&
          id
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );
    };
  }, []);

  return (
    <nav
      className={`navbar ${
        scrolled
          ? "navbar-scrolled"
          : ""
      }`}
    >
      <div className="container navbar-container">
        {/* Логотип */}
        <a
          href="#home"
          className="logo"
        >
          Yaroslav
          <span>Dev</span>
        </a>

        {/* Desktop menu */}
        <div
          className={`nav-links ${
            mobileMenu
              ? "mobile-active"
              : ""
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={
                activeSection ===
                link.id
                  ? "active-link"
                  : ""
              }
              onClick={() =>
                setMobileMenu(false)
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Правая часть */}
        <div className="navbar-right">
          {/* Переключение темы */}
          <ThemeToggle />

          {/* Mobile button */}
          <button
            className="menu-btn"
            aria-label="Открыть меню"
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }
          >
            {mobileMenu ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;