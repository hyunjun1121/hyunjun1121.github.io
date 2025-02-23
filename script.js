document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Set initial dark mode state
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌙";
  }

  // Dark mode toggle
  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
    darkModeToggle.textContent = isDark ? "☀️" : "🌙";
  });

  // Smooth scrolling for nav links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for section animations
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => {
    observer.observe(section);
  });

  // Scroll-to-top button functionality
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Log interactive experience details (future enhancements can replace this with a modal)
  document.querySelectorAll('.exp-item').forEach(item => {
    item.addEventListener('click', () => {
      console.log('Experience details: More interactive content coming soon.');
    });
  });

  console.log("Welcome to Hyunjun Kim's technical portfolio.");
});
