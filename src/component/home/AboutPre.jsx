import { Link } from "react-router-dom";
import "../../style/aboutPre.scss";

const AboutPre = () => {
  return (
    <section className="aboutPre">
      <div className="left">
        <p className="small-title">About</p>
        <h3>
          기획 의도를
          <br />
          화면 언어로 바꾸는 사람
        </h3>
      </div>

      <div className="right">
        <p>
          저는 단순히 예쁜 사이트보다, 브랜드의 분위기와 메시지가 자연스럽게
          전달되는 화면을 만드는 것에 관심이 많습니다.
        </p>
        <p>
          레이아웃, 타이포, 컬러, 인터랙션을 조화롭게 설계하여 더 인상적인 웹
          경험을 만드는 것을 목표로 합니다.
        </p>
        <Link to="/about" className="more-btn">자세히 보기</Link>
      </div>
    </section>
  );
};

export default AboutPre;