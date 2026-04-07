import { Link } from "react-router-dom";
import "../../style/projectPre.scss";

const projectList = [
  {
    id: 1,
    title: "Moodscape",
    category: "Team Project",
    desc: "날씨와 음악을 연결한 감성 중심 웹사이트 프로젝트",
  },
  {
    id: 2,
    title: "Éclat",
    category: "Branding Web",
    desc: "향 중심 브랜드 무드를 담아낸 퍼퓸 브랜딩 사이트",
  },
  {
    id: 3,
    title: "Responsive Clone",
    category: "Publishing",
    desc: "반응형 구현과 레이아웃 구성 중심의 클론 코딩 작업",
  },
];

const ProjectPre = () => {
  return (
    <section className="projectPre">
      <div className="title-wrap">
        <p className="small-title">Projects</p>
        <h3>Selected Works</h3>
      </div>

      <div className="project-list">
        {projectList.map((item) => (
          <Link to={`/projects/${item.id}`} className="project-card" key={item.id}>
            <div className="thumb"></div>
            <div className="text">
              <span>{item.category}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="view-more-wrap">
        <Link to="/projects" className="view-more">전체 프로젝트 보기</Link>
      </div>
    </section>
  );
};

export default ProjectPre;