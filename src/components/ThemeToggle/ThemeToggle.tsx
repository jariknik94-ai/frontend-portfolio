// React hooks
import { useState } from "react";

// Icons
import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

// Styles
import "./ThemeToggle.scss";

// Получение стартовой темы
const getInitialTheme = () => {
  const savedTheme =
    localStorage.getItem("theme");

  // Проверка сохраненной темы
  const isDark =
    savedTheme === "dark";

  // Сразу применяем класс
  if (isDark) {
    document.documentElement.classList.add(
      "dark-theme"
    );
  }

  return isDark;
};

// Theme toggle component
function ThemeToggle() {
  // State темы
  const [darkMode, setDarkMode] =
    useState(getInitialTheme);

  // Переключение темы
  const toggleTheme = () => {
    // Новое значение темы
    const newTheme = !darkMode;

    // Обновляем state
    setDarkMode(newTheme);

    // Обновляем DOM
    if (newTheme) {
      document.documentElement.classList.add(
        "dark-theme"
      );
    } else {
      document.documentElement.classList.remove(
        "dark-theme"
      );
    }

    // Сохраняем тему
    localStorage.setItem(
      "theme",
      newTheme ? "dark" : "light"
    );
  };

  return (
    <button
      className="theme-toggle"
      aria-label="Переключить тему"
      onClick={toggleTheme}
    >
      {darkMode ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </button>
  );
}

export default ThemeToggle;