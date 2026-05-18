// React hooks
import { useEffect, useState } from "react";

// Иконки
import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

// Стили
import "./ThemeToggle.scss";

// Компонент переключения темы
function ThemeToggle() {
  // State темы
  const [darkMode, setDarkMode] =
    useState(false);

  // Проверяем сохраненную тему
  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    // Если dark
    if (savedTheme === "dark") {
      setDarkMode(true);

      // Добавляем класс на HTML
      document.documentElement.classList.add(
        "dark-theme"
      );
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    // Если dark
    if (newTheme) {
      document.documentElement.classList.add(
        "dark-theme"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark-theme"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    }
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