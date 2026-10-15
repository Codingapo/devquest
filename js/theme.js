const THEME_KEY = "devquest-theme";
const savedTheme = localStorage.getItem(THEME_KEY);
const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
const initialTheme = savedTheme || preferredTheme;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const button = document.querySelector("#theme-toggle");
  if (button) {
    button.textContent = theme === "light" ? "🌙" : "☀️";
    button.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(initialTheme);
  const button = document.querySelector("#theme-toggle");
  if (!button) return;

  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
});
