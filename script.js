document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // 초기 다크 모드 상태 적용 (localStorage 기준)
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
  } else {
    darkModeToggle.textContent = "🌙";
  }

  // 다크 모드 토글 이벤트
  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
    darkModeToggle.textContent = isDark ? "☀️" : "🌙";
  });

  // 부드러운 스크롤 효과 (네비게이션 링크 클릭 시)
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

  // 인터랙티브 예시: 경험 항목 클릭 시 세부 정보 팝업
  document.querySelectorAll('.exp-item').forEach(item => {
    item.addEventListener('click', () => {
      alert('클릭한 경험에 대한 세부 정보가 여기에 표시됩니다!');
    });
  });
});
