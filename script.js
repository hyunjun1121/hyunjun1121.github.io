// 언어 전환 기능 수정
document.addEventListener('DOMContentLoaded', function() {
  const languageBtns = document.querySelectorAll('.language-btn');
  
  languageBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      document.documentElement.lang = lang;
      
      // 버튼 활성화 상태 변경
      languageBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // 애니메이션 처리
  setTimeout(() => {
    document.querySelectorAll('.expertise-tag').forEach((tag, index) => {
      setTimeout(() => {
        tag.classList.add('animated');
      }, 100 * index);
    });
    
    setTimeout(() => {
      document.querySelector('.intro-quote').classList.add('animated');
    }, 600);
  }, 500);
  
  // 스크롤 애니메이션
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        // 스킬 태그 애니메이션
        if (entry.target.classList.contains('skills-category')) {
          const skillTags = entry.target.querySelectorAll('.skill-tag');
          skillTags.forEach((tag, index) => {
            setTimeout(() => {
              tag.classList.add('animated');
            }, 50 * index);
          });
        }
      }
    });
  }, { threshold: 0.2 });
  
  // 타임라인 노드 관찰
  document.querySelectorAll('.timeline-node').forEach(item => {
    observer.observe(item);
  });
  
  // 논문 카드 관찰
  document.querySelectorAll('.paper-card').forEach(item => {
    observer.observe(item);
  });
  
  // 수상 카드 관찰
  document.querySelectorAll('.award-card').forEach(item => {
    observer.observe(item);
  });
  
  // 스킬 카테고리 관찰
  document.querySelectorAll('.skills-category').forEach(item => {
    observer.observe(item);
  });
});
