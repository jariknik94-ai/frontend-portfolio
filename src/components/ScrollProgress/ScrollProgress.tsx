// React hooks
import { useEffect, useState } from "react";

// Стили
import "./ScrollProgress.scss";

// Компонент прогресса скролла
function ScrollProgress() {
  // Progress state
  const [scrollProgress, setScrollProgress] =
    useState(0);

  // Отслеживание скролла
  useEffect(() => {
    const handleScroll = () => {
      // Высота страницы
      const totalHeight =
        document.documentElement
          .scrollHeight -
        document.documentElement
          .clientHeight;

      // Текущая позиция
      const scrollPosition =
        window.scrollY;

      // Процент
      const progress =
        (scrollPosition / totalHeight) *
        100;

      setScrollProgress(progress);
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

  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{
          width: `${scrollProgress}%`,
        }}
      ></div>
    </div>
  );
}

export default ScrollProgress;