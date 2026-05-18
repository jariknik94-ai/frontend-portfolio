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

// Тип проекта
interface Project {
  id: number;

  title: string;

  category: string;

  description: string;

  technologies: string[];

  github: string;

  demo: string;
}

// Props компонента
interface ProjectModalProps {
  isOpen: boolean;

  onClose: () => void;

  project: Project | null;
}

// Компонент модального окна
function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  // Закрытие по ESC
  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [onClose]);

  // Блокировка скролла
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
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
          {/* Модальное окно */}
          <motion.div
            className="project-modal glass-card"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* Кнопка закрытия */}
            <button
              className="modal-close"
              onClick={onClose}
            >
              <FaTimes />
            </button>

            {/* Верхняя часть */}
            <div className="modal-top">
              <span className="modal-category">
                {project.category}
              </span>

              <h2>{project.title}</h2>
            </div>

            {/* Изображение */}
            <div className="modal-image"></div>

            {/* Описание */}
            <div className="modal-content">
              <h3>Описание проекта</h3>

              <p>{project.description}</p>

              {/* Технологии */}
              <h3>Используемые технологии</h3>

              <div className="modal-tech">
                {project.technologies.map(
                  (tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* Кнопки */}
              <div className="modal-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <FaGithub />

                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="btn modal-demo-btn"
                >
                  <FaExternalLinkAlt />

                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;