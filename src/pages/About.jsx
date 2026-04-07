import React from 'react';

import "../style/about.scss";

const About = () => {
  return (
    <section className="about-page page-layout">
      <div className="page-title">
        <p>About Me</p>
        <h2>브랜드 무드와 경험을 구현하는 프론트엔드 작업자</h2>
      </div>

      <div className="about-content">
        <div className="about-box">
          <h3>Profile</h3>
          <p>
            사용자의 시선 흐름과 브랜드 인상을 고려한 웹 화면을 설계하고
            구현하는 데 관심이 있습니다.
          </p>
        </div>

        <div className="about-box">
          <h3>Skills</h3>
          <p>HTML, CSS, SCSS, JavaScript, React, Figma</p>
        </div>

        <div className="about-box">
          <h3>Strength</h3>
          <p>
            무드보드, 레이아웃, 컬러 톤, 인터랙션을 하나의 흐름으로 연결해
            완성도 있는 결과물을 만드는 것을 좋아합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;