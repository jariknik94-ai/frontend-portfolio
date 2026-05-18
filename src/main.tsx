// React StrictMode
import React from "react";

import ReactDOM from "react-dom/client";

// Главный компонент
import App from "./App";

// Глобальные стили
import "./index.css";

// Рендер React приложения
ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);