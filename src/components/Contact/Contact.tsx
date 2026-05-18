// React hooks
import { useState } from "react";

// Анимации
import { motion } from "framer-motion";

// Иконки
import {
  FaGithub,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

// Стили
import "./Contact.scss";

// Компонент Contact
function Contact() {
  // State формы
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  // State ошибок
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Изменение полей
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,

      [event.target.name]:
        event.target.value,
    });
  };

  // Валидация формы
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Проверка имени
    if (!formData.name.trim()) {
      newErrors.name =
        "Введите ваше имя";
    }

    // Проверка email
    if (!formData.email.trim()) {
      newErrors.email =
        "Введите email";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Некорректный email";
    }

    // Проверка сообщения
    if (!formData.message.trim()) {
      newErrors.message =
        "Введите сообщение";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(
      (error) => error !== ""
    );
  };

  // Отправка формы
  const handleSubmit = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    // Проверяем форму
    if (validateForm()) {
      console.log(formData);

      // Временное сообщение
      alert(
        "Форма успешно отправлена!"
      );

      // Очистка формы
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contact"
      className="contact"
    >
      <div className="container">
        {/* Заголовок */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">
            КОНТАКТЫ
          </p>

          <h2 className="section-title">
            Свяжитесь со мной
          </h2>
        </motion.div>

        {/* Grid layout */}
        <div className="contact-grid">
          {/* Левая часть */}
          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Карточка */}
            <div className="contact-card glass-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>

                <p><a href="mailto: bikkoper@yandex.ru">
                  bikkoper@yandex.ru</a>
                </p>
              </div>
            </div>

            {/* Карточка */}
            <div className="contact-card glass-card">
              <div className="contact-icon">
                <FaGithub />
              </div>

              <div>
                <h3>GitHub</h3>

                <p><a href="https://github.com/jariknik94-ai"
                      target="_blank"
                      rel="noreferrer">github.com/jariknik94-ai
                    </a>
                </p>
              </div>
            </div>

            {/* Карточка */}
            <div className="contact-card glass-card">
              <div className="contact-icon">
                <FaTelegramPlane />
              </div>

              <div>
                <h3>Telegram</h3>
                <p><a href="https://t.me/bikkoper" 
                      target="_blank" 
                      rel="noreferrer">@bikkoper
                    </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Правая часть */}
          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Input */}
            <div className="form-group">
              <label>
                Ваше имя
              </label>

              <input
                type="text"
                name="name"
                placeholder="Введите имя"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <span className="error-text">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Input */}
            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Введите email"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <span className="error-text">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Textarea */}
            <div className="form-group">
              <label>
                Сообщение
              </label>

              <textarea
                name="message"
                placeholder="Введите сообщение"
                rows={6}
                value={formData.message}
                onChange={handleChange}
              />

              {errors.message && (
                <span className="error-text">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Кнопка */}
            <button
              type="submit"
              className="btn btn-primary"
            >
              Отправить сообщение
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;