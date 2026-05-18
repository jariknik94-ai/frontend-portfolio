// React hooks
import { useState } from "react";

// Анимации
import { motion } from "framer-motion";

// Иконки
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Modal
import ProjectModal from "../ProjectModal/ProjectModal";

// Стили
import "./Projects.scss";

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

// Компонент Projects
function Projects() {
  // Активная категория
  const [activeFilter, setActiveFilter] =
    useState("React");

  // Активный проект
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  // Состояние модального окна
  const [isModalOpen, setIsModalOpen] =
    useState(false);

  // Данные проектов
  const projects: Project[] = [
    {
      id: 1,

      title: "Weather App",

      category: "React",

      description:
        "Современное погодное приложение с API, прогнозом погоды, адаптивным интерфейсом и glassmorphism дизайном.",

      technologies: [
        "React",
        "TypeScript",
        "SCSS",
        "API",
        "Vite",
      ],

      github:
        "https://github.com/jariknik94-ai/weather-app",

      demo: "#",
    },

    {
      id: 2,

      title: "Vue Hooks Homework",

      category: "Vue",

      description:
        "Проект на Vue.js с использованием Composition API, реактивности и современных frontend-подходов.",

      technologies: [
        "Vue.js",
        "Composition API",
        "JavaScript",
        "SCSS",
      ],

      github:
        "https://github.com/jariknik94-ai/vue-hooks-homework",

      demo: "#",
    },

    {
      id: 3,

      title: "Vuetify Dashboard UI",

      category: "Vue",

      description:
        "Современная dashboard-панель с Vuetify, адаптивным layout и анимациями интерфейса.",

      technologies: [
        "Vue",
        "Vuetify",
        "SCSS",
        "UI/UX",
      ],

      github:
        "https://github.com/jariknik94-ai/vuetify-app",

      demo: "#",
    },

    {
      id: 4,

      title: "Redis Todo App",

      category: "Backend",

      description:
        "CRUD приложение с использованием Redis для хранения данных и Node.js backend архитектуры.",

      technologies: [
        "Node.js",
        "Redis",
        "Express",
        "CRUD",
      ],

      github:
        "https://github.com/jariknik94-ai/redis-todo-app",

      demo: "#",
    },

    {
      id: 5,

      title: "WebSocket Todo App",

      category: "Backend",

      description:
        "Realtime приложение с использованием WebSocket для мгновенного обновления данных.",

      technologies: [
        "WebSocket",
        "Node.js",
        "Express",
        "Realtime",
      ],

      github:
        "https://github.com/jariknik94-ai/websocket-todo-app",

      demo: "#",
    },

    {
      id: 6,

      title: "Socket.IO Todo",

      category: "Fullstack",

      description:
        "Fullstack приложение с Socket.IO, Redis и realtime синхронизацией задач.",

      technologies: [
        "Socket.IO",
        "Redis",
        "Express",
        "Node.js",
      ],

      github:
        "https://github.com/jariknik94-ai/socketio_todo",

      demo: "#",
    },

    {
      id: 7,

      title: "Nginx Reverse Proxy",

      category: "DevOps",

      description:
        "Настройка backend-инфраструктуры с использованием Nginx reverse proxy и Linux окружения.",

      technologies: [
        "Nginx",
        "Linux",
        "Node.js",
        "Proxy",
      ],

      github:
        "https://github.com/jariknik94-ai/backend-nginx",

      demo: "#",
    },

    {
      id: 8,

      title: "Vue Portfolio App",

      category: "Vue",

      description:
        "Адаптивное SPA приложение на Vue.js с современным интерфейсом и компонентной архитектурой.",

      technologies: [
        "Vue.js",
        "SCSS",
        "Responsive",
        "SPA",
      ],

      github:
        "https://github.com/jariknik94-ai/my-vue-app",

      demo: "#",
    },
  ];

  // Категории фильтрации
  const filters = [
    "React",
    "Vue",
    "Backend",
    "Fullstack",
    "DevOps",
  ];

  // Фильтрация проектов
  const filteredProjects = projects.filter(
    (project) =>
      project.category === activeFilter
  );

  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="container">
        {/* Заголовок */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">
            ПРОЕКТЫ
          </p>

          <h2 className="section-title">
            Примеры выполненных проектов
          </h2>
        </motion.div>

        {/* Фильтры */}
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter
                  ? "active-filter"
                  : ""
              }`}
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid проектов */}
        <div className="projects-grid">
          {filteredProjects.map(
            (project, index) => (
              <motion.div
                key={project.id}
                className="project-card glass-card"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                {/* Верхняя часть */}
                <div className="project-image">
                  <div className="project-overlay">
                    {/* Кнопки */}
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                      </a>

                      <a
                        href={project.demo}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Контент */}
                <div className="project-content">
                  {/* Категория */}
                  <span className="project-category">
                    {project.category}
                  </span>

                  {/* Название */}
                  <h3>{project.title}</h3>

                  {/* Описание */}
                  <p>
                    {project.description}
                  </p>

                  {/* Технологии */}
                  <div className="project-tech">
                    {project.technologies.map(
                      (tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  {/* Кнопка */}
                  <button
                    className="project-btn"
                    aria-label={`Подробнее о проекте ${project.title}`}
                    onClick={() => {
                      setSelectedProject(
                        project
                      );

                      setIsModalOpen(true);
                    }}
                  >
                    Подробнее
                  </button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Модальное окно */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;