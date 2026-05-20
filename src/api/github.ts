import axios from "axios";

// GitHub username
const USERNAME = "jariknik94-ai";

/**
 * Получение репозиториев пользователя GitHub
 * Используется для отображения проектов в портфолио
 */
export const fetchGitHubRepos = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${USERNAME}/repos`
    );

    return response.data;
  } catch (error) {
    console.error("Ошибка GitHub API:", error);
    return [];
  }
};