import type { Project } from "../Projects/Projects";
// React hooks
import { useEffect } from "react";

// Анимации
import { motion, AnimatePresence } from "framer-motion";

// Иконки
import {
  FaGithub,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Стили
import "./ProjectModal.scss";


// Props модального окна
interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

// Компонент модального окна проекта
function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  // Закрытие по ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Блокировка скролла при открытии
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal glass-card"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* кнопка закрытия */}
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>

            {/* верх */}
            <div className="modal-top">
              <span className="modal-category">
                {project.language}
              </span>

              <h2>{project.name}</h2>
            </div>

            {/* описание */}
            <div className="modal-content">
              <h3>Описание проекта</h3>
              <p>{project.description}</p>

              {/* ссылки */}
              <div className="modal-buttons">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <FaGithub />
                  GitHub
                </a>

                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="btn modal-demo-btn"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;