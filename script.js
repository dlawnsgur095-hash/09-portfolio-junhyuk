// 작품 데이터 배열
const projects = [
  {
    title: "TMDB API 영화 검색 앱",
    description: "TMDB API를 연동하여 실시간으로 영화를 검색하고, 평점순 정렬과 배우 정보까지 확인할 수 있는 인터랙티브 웹 서비스.",
    tags: ["HTML", "CSS", "JavaScript", "TMDB API"],
    url: "https://github.com/your-username/movie-app" // 실제 Github 주소나 배포 링크로 수정해
  },
  {
    title: "NASA APOD 천문 사진 뷰어",
    description: "NASA의 오픈 API를 활용해 '오늘의 천문 사진(APOD)'을 다크 테마 기반의 UI로 멋지게 보여주는 웹 페이지.",
    tags: ["JavaScript", "NASA API", "Fetch API"],
    url: "https://github.com/your-username/nasa-apod"
  },
  {
    title: "5x5 타일 동물 퀴즈 게임",
    description: "Wikipedia API 논리를 활용해 타일을 하나씩 열어보며 어떤 동물인지 맞히는 브라우저 기반 퍼즐 게임.",
    tags: ["HTML", "JavaScript", "DOM 조작"],
    url: "https://github.com/your-username/animal-quiz"
  }
];

// 컨테이너 요소 가져오기
const container = document.getElementById('projects-container');

// 데이터를 순회하며 HTML 요소 생성
projects.forEach(project => {
  // 태그 배열을 HTML 문자열로 변환
  const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join('');
  
  // 카드 HTML 구조 만들기
  const cardHtml = `
    <div class="card">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="tags">
        ${tagsHtml}
      </div>
      <a href="${project.url}" target="_blank" class="btn">프로젝트 보기</a>
    </div>
  `;
  
  // 컨테이너에 카드 추가
  container.innerHTML += cardHtml;
});

