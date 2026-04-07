import { Link } from "react-router-dom";
import "../../style/hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="sub-title">Frontend Portfolio</p>
        <h2>
          감각적인 브랜드 경험을
          <br />
          화면 위에 구현합니다
        </h2>
        <p className="desc">
          React를 기반으로 브랜드 무드와 사용자 경험을 시각적으로 풀어내는
          프론트엔드 작업물을 정리한 포트폴리오입니다.
        </p>

        <div className="hero-btns">
          <Link to="/projects" className="filled">프로젝트 보기</Link>
          <Link to="/about" className="line">About Me</Link>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-box">
          <span>PORTFOLIO</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;