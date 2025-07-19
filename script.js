const toggleButton = document.getElementById("dark-mode-toggle");

function setMode(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  toggleButton.textContent = isDark
    ? "☀️ Toggle Light Mode"
    : "🌙 Toggle Dark Mode";
}

const savedMode = localStorage.getItem("darkMode");
const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const initialMode = savedMode !== null ? savedMode === "true" : prefersDarkMode;

setMode(initialMode);

toggleButton.addEventListener("click", function () {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
  toggleButton.textContent = isDarkMode
    ? "☀️ Toggle Light Mode"
    : "🌙 Toggle Dark Mode";
});
