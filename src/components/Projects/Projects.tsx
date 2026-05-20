// Swiper (мобильный слайдер)
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// React hooks
import { useEffect, useState } from "react";

// Анимации
import { motion } from "framer-motion";

// Иконки
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Axios (HTTP запросы)
import axios from "axios";

// Модальное окно проекта
import ProjectModal from "../ProjectModal/ProjectModal";

// Стили
import "./Projects.scss";

/**
 * ===== ТИП ПРОЕКТА (GitHub API) =====
 * Используется для типизации данных репозиториев
 */
export interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
}
// Тип ответа GitHub API (минимально нужные поля)
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
}

// Компонент проектов
function Projects() {
  // ===== STATE =====

  // список проектов (репозитории GitHub)
  const [projects, setProjects] = useState<Project[]>([]);

  // состояние загрузки
  const [loading, setLoading] = useState(true);

  // активный фильтр (язык проекта)
  const [activeFilter, setActiveFilter] = useState<string>("");

  // выбранный проект для модального окна
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // состояние открытия модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ===== ЗАГРУЗКА ДАННЫХ С GITHUB =====
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://api.github.com/users/jariknik94-ai/repos"
        );

        // Приводим данные API к нашему типу Project
        const formatted: Project[] = response.data.map((repo: GitHubRepo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || "No description",
          html_url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language || "Other",
        }));

        // Сохраняем проекты
        setProjects(formatted);

        /**
         * ===== ВАЖНО =====
         * Устанавливаем первую категорию СРАЗУ здесь,
         * чтобы НЕ использовать useEffect (и не ловить ESLint error)
         */
        const firstLanguage =
          Array.from(
            new Set(formatted.map((p) => p.language).filter(Boolean))
          )[0] || "Other";

        setActiveFilter(firstLanguage);
      } catch (error) {
        console.error("GitHub API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // ===== ФИЛЬТРЫ (уникальные языки) =====
  const filters = Array.from(
    new Set(
      projects
        .map((p) => p.language)
        .filter((lang): lang is string => Boolean(lang))
    )
  );

  // ===== ФИЛЬТРАЦИЯ ПРОЕКТОВ =====
  const filteredProjects = projects.filter(
    (project) => project.language === activeFilter
  );

  // ===== LOADING UI =====
  if (loading) {
    return (
      <section className="projects">
        <div className="container">
          <p style={{ textAlign: "center" }}>Загрузка проектов...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        {/* ===== HEADER ===== */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="section-subtitle">ПРОЕКТЫ</p>
          <h2 className="section-title">GitHub репозитории</h2>
        </motion.div>

        {/* ===== ФИЛЬТРЫ ===== */}
        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                activeFilter === filter ? "active-filter" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ===== GRID (DESKTOP) ===== */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* ===== IMAGE BLOCK ===== */}
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>

                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* ===== CONTENT ===== */}
              <div className="project-content">
                <span className="project-category">
                  {project.language}
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <button
                  className="project-btn"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                >
                  Подробнее
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== MOBILE SLIDER ===== */}
        <div className="projects-slider">
          <Swiper spaceBetween={20} slidesPerView={1.1}>
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="project-card glass-card">
                  <div className="project-image">
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub />
                        </a>

                        {project.homepage && (
                          <a
                            href={project.homepage}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <span className="project-category">
                      {project.language}
                    </span>

                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    <button
                      className="project-btn"
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;