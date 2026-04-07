import { useParams } from "react-router-dom";
import "../style/projectDetail.scss";

const projectData = {
  1: {
    title: "Moodscape",
    subtitle: "날씨 기반 음악 추천 웹사이트",
    overview:
      "날씨와 음악 감성을 연결해 사용자에게 맞는 분위기를 전달하는 팀 프로젝트입니다.",
  },
  2: {
    title: "Éclat",
    subtitle: "향 중심 브랜딩 사이트",
    overview:
      "브랜드 무드와 제품 이미지를 중심으로 구성한 감성형 웹사이트입니다.",
  },
  3: {
    title: "Hoxton Hotel Clone",
    subtitle: "반응형 클론 코딩",
    overview:
      "레이아웃 분석과 반응형 구현을 중심으로 진행한 퍼블리싱 작업입니다.",
  },
  4: {
    title: "TMDB Movie Site",
    subtitle: "영화 API 프로젝트",
    overview:
      "영화 데이터를 시각적으로 정리하고 탐색할 수 있도록 만든 프로젝트입니다.",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <section className="project-detail page-layout">프로젝트 정보가 없습니다.</section>;
  }

  return (
    <section className="project-detail page-layout">
      <div className="detail-hero">
        <p>{project.subtitle}</p>
        <h2>{project.title}</h2>
      </div>

      <div className="detail-box">
        <h3>Overview</h3>
        <p>{project.overview}</p>
      </div>

      <div className="detail-box">
        <h3>Keyword</h3>
        <p>React / Branding / UI Design / Publishing</p>
      </div>

      <div className="detail-box">
        <h3>Contribution</h3>
        <p>기획 정리, 레이아웃 설계, 스타일링, 컴포넌트 구현</p>
      </div>
    </section>
  );
};

export default ProjectDetail;