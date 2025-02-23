document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Apply dark mode if enabled in local storage
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
  }

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
  });
});
