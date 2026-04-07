import { Link } from "react-router-dom";
import "../style/projects.scss";

const projects = [
  {
    id: 1,
    title: "Moodscape",
    type: "Team Project",
    desc: "날씨 기반 음악 추천 사이트",
  },
  {
    id: 2,
    title: "Éclat",
    type: "Branding Web",
    desc: "향 중심 브랜딩 사이트",
  },
  {
    id: 3,
    title: "Hoxton Hotel Clone",
    type: "Responsive Web",
    desc: "호텔 사이트 반응형 클론 코딩",
  },
  {
    id: 4,
    title: "TMDB Movie Site",
    type: "API Project",
    desc: "영화 데이터 기반 사이트",
  },
];

const Projects = () => {
  return (
    <section className="projects-page page-layout">
      <div className="page-title">
        <p>Projects</p>
        <h2>작업물 모음</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} className="projects-card" key={project.id}>
            <div className="thumb"></div>
            <div className="text">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;