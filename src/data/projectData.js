export const projectData = [
  {
    id: 'eclat',
    title: 'ÉCLAT',
    category: 'Branding Site',
    responsive: 'Responsive Web - updating',
    type: 'Team Project',
    people: '7 people',
    duration: '2 weeks',
    tools: [
      { name: 'React', icon: 'react' },
      { name: 'SCSS', icon: 'scss' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Photoshop', icon: 'photoshop' },
      { name: 'Figma', icon: 'figma' },
    ],
    desc: 'ÉCLAT는 보이지 않는 빛의 향을 향으로 풀어내는 브랜드입니다. 일상 속에서 빛나는 감각적인 경험을 선사합니다.',
    site: 'https://eclat-t.vercel.app',
    image: '/img/eclat.png',
    detailLink: '/projects/eclat',
    detail: {
      heroImage: '/img/eclat-detail-hero.jpg',
      overviewTitle: '빛의 향을 시각적으로 풀어낸 감각적인 브랜드 사이트',
      overviewText: `ÉCLAT 프로젝트는 향수 브랜드의 감성을 웹으로 표현한 팀 프로젝트입니다.
투명한 분위기와 여백 중심 레이아웃을 통해 브랜드 무드를 전달하도록 설계했습니다.
사용자가 자연스럽게 브랜드 스토리를 경험할 수 있도록 흐름을 구성했습니다.`,
      contribution: `메인 페이지 퍼블리싱과 레이아웃 구조 작업을 담당했습니다.
반응형 대응과 이미지 비율 조정, 스타일 디테일 작업에 참여했습니다.`,
      imageSections: [
        {
          type: 'full',
          images: [{ src: '/img/eclat-detail-01.jpg', alt: 'eclat main' }],
        },
        {
          type: 'half',
          images: [
            { src: '/img/eclat-detail-02.jpg', alt: 'eclat section 1' },
            { src: '/img/eclat-detail-03.jpg', alt: 'eclat section 2' },
          ],
        },
        {
          type: 'sidebar',
          images: [
            { src: '/img/eclat-detail-04.jpg', alt: 'eclat thumb 1' },
            { src: '/img/eclat-detail-05.jpg', alt: 'eclat thumb 2' },
            { src: '/img/eclat-detail-06.jpg', alt: 'eclat thumb 3' },
            { src: '/img/eclat-detail-07.jpg', alt: 'eclat large' },
          ],
        },
        {
          type: 'split',
          images: [
            { src: '/img/eclat-detail-08.jpg', alt: 'eclat left' },
            { src: '/img/eclat-detail-09.jpg', alt: 'eclat right' },
          ],
        },
        {
          type: 'full',
          images: [{ src: '/img/eclat-detail-10.jpg', alt: 'eclat bottom' }],
        },
      ],
    },
  },

  {
    id: 'moodscape',
    title: 'MoodScape',
    category: 'Branding Site',
    responsive: 'Responsive Web',
    type: 'Team Project',
    people: '7 people',
    duration: '2 weeks',
    tools: [
      { name: 'React', icon: 'react' },
      { name: 'SCSS', icon: 'scss' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'API', icon: 'api' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Vercel', icon: 'vercel' },
      { name: 'Photoshop', icon: 'photoshop' },
      { name: 'Figma', icon: 'figma' },
    ],
    desc: '날씨와 음악을 연결해 분위기 기반 경험을 제공하는 인터랙티브 웹 프로젝트입니다.',
    site: 'https://mood-scape-umber.vercel.app',
    image: '/img/mood.jpg',
    detailLink: '/projects/moodscape',
    detail: {
      heroImage: '/img/mood.jpg',
      overviewTitle: '날씨와 감정을 연결한 인터랙티브 웹',
      overviewText: '날씨 데이터를 기반으로 사용자에게 맞는 분위기의 음악을 제공하는 프로젝트입니다.',
      contribution: '메인 UI 퍼블리싱과 반응형 작업을 담당했습니다.',
      imageSections: [
        {
          type: 'full',
          images: [{ src: '/img/mood.jpg', alt: 'moodscape' }],
        },
      ],
    },
  },

  {
    id: 'movie-site',
    title: 'Movie Site',
    category: 'Branding Site',
    responsive: 'Responsive Web',
    type: 'Personal Project',
    people: '1 person',
    duration: '1 week',
    tools: [
      { name: 'React', icon: 'react' },
      { name: 'SCSS', icon: 'scss' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'API', icon: 'api' },
      { name: 'GitHub', icon: 'github' },
    ],
    desc: 'TMDB API 기반 영화 탐색 사이트입니다.',
    site: 'https://seongeun040624.github.io/TMDB_Movies/',
    image: '/img/movie-site.png',
    detailLink: '/projects/movie-site',
    detail: {
      heroImage: '/img/movie-site.png',
      overviewTitle: '영화 정보를 탐색하는 API 프로젝트',
      overviewText: 'TMDB 데이터를 활용하여 영화 정보를 탐색할 수 있도록 구성했습니다.',
      contribution: '기획, 디자인, 개발 전 과정 단독 진행',
      imageSections: [
        {
          type: 'full',
          images: [{ src: '/img/movie-site.png', alt: 'movie site' }],
        },
      ],
    },
  },

  {
    id: 'recipe',
    title: 'Recipe Site',
    category: 'Branding Site',
    responsive: 'Responsive Web',
    type: 'Personal Project',
    people: '1 person',
    duration: '1 week',
    tools: [
      { name: 'React', icon: 'react' },
      { name: 'SCSS', icon: 'scss' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'API', icon: 'api' },
      { name: 'GitHub', icon: 'github' },
    ],
    desc: '레시피 정보를 보기 쉽게 구성한 웹 프로젝트입니다.',
    site: 'https://cooks-murex.vercel.app',
    image: '/img/recipe.png',
    detailLink: '/projects/recipe',
    detail: {
      heroImage: '/img/recipe.png',
      overviewTitle: '레시피 탐색 중심 프로젝트',
      overviewText: '카테고리 기반 레시피 탐색 구조로 제작했습니다.',
      contribution: '단독 제작 프로젝트',
      imageSections: [
        {
          type: 'full',
          images: [{ src: '/img/recipe.png', alt: 'recipe site' }],
        },
      ],
    },
  },
];