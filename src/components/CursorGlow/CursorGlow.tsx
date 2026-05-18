// React hooks
import { useEffect, useState } from "react";

// Стили
import "./CursorGlow.scss";

// Компонент glow курсора
function CursorGlow() {
  // Позиция курсора
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  // Mouse move
  useEffect(() => {
    const handleMouseMove = (
      event: MouseEvent
    ) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
}

export default CursorGlow;