// 작품 데이터 배열
const projects = [
  {
    title: "방치형 쿠키 클리커 게임",
    description: "쿠키를 클릭해 모으고, 할머니/공장 등의 업그레이드를 통해 초당 획득량을 늘리는 웹 게임. 오프라인 보상 및 5초 자동 저장 기능 포함.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    url: "https://codepen.io/editor/uowjeihy-the-encoder/pen/01a0a8f1-52d4-7efb-ac87-6b60bcfd7369" // 실제 깃허브 주소로 수정 필요
  },
  {
    title: "오늘의 운세 뽑기 웹앱",
    description: "카드 뒤집기 애니메이션을 통해 하루 한 번 운세를 확인하는 웹앱. 연속 접속일(Streak) 및 최근 7일 기록 저장 기능 제공.",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    url: "https://codepen.io/editor/uowjeihy-the-encoder/pen/01a0a8d3-979b-7640-9649-6bd0767eff87" // 실제 깃허브 주소로 수정 필요
  },
  {
    title: "먹거리 이상형 월드컵",
    description: "다양한 먹거리 후보 중 두 가지를 비교하여 최후의 승자를 가리는 토너먼트 방식의 인터랙티브 웹 게임.",
    tags: ["HTML", "CSS", "JavaScript", "DOM 조작"],
    url: "https://codepen.io/uowjeihy-the-encoder/pen/ZYLrBpO" // 실제 깃허브 주소로 수정 필요
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


