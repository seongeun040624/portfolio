import React, { useEffect, useRef, useState } from 'react';
import { FiCode, FiPenTool, FiLayers } from 'react-icons/fi';
import '../../style/aboutPre.scss';

const skillData = [
  {
    title: 'Frontend',
    icon: <FiCode />,
    items: ['HTML', 'CSS | SCSS', 'JavaScript', 'React Vite'],
  },
  {
    title: 'Design',
    icon: <FiPenTool />,
    items: ['Figma', 'Photoshop', 'Illustrator', 'Indesign', 'After Effect', 'Premiere Pro', 'LightRoom'],
  },
  {
    title: 'Etc.',
    icon: <FiLayers />,
    items: ['GitHub', 'VS Code', 'Vercel', 'Firebase', 'Notion', 'Chat GPT', 'Gemini', 'Cursor', 'Midjourney'],
  },
];

const AboutPre = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section className="aboutPre" id="about" ref={aboutRef}>
      <div className="inner">
        <div className={`reveal-text delay1 about-title ${isVisible ? 'show' : ''}`}>
          <span className="text">About</span>
          <span className="cover primary"></span>
          <span className="cover secondary"></span>
        </div>

        <div className={`about-wrap ${isVisible ? 'show' : ''}`}>
          <div className="about-photo">
            <img src="/img/about.jpg" alt="about profile" />
          </div>

          <div className="about-content">
            <div className="about-top">
              <div className="profile-row">
                <h2>정성은</h2>
                <span>2004.06.24</span>
              </div>

              <h3>Frontend Design | Publisher | UI/UX Design</h3>

              <p className="intro">
                디자인 전공을 바탕으로 사용자 경험을 이해하고, React 기반 프론트엔드 개발까지
                확장해 온 지원자입니다.
                <br />
                현재는 프론트엔드 개발자를 목표로 하고 있으며, 퍼블리싱과 디자인까지 유연하게
                대응할 수 있는 것이 강점입니다.
                <br />
                부족한 부분은 빠르게 학습하고 바로 결과로 만들어내는 실행력을 바탕으로,
                어떤 환경에서도 실무에 기여할 준비가 되어 있습니다.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-left">
                <div className="info-box">
                  <h4>Experience</h4>
                  <div className="line"></div>

                  <ul>
                    <li>
                      <strong>동양미래대학교 시각디자인학과</strong>
                      <span>2025~</span>
                    </li>
                    <li>
                      <strong>동양미래대학교 시각디자인과 전문학사</strong>
                      <span>~ 2025 졸업</span>
                    </li>
                    <li>
                      <strong>수도여자고등학교</strong>
                      <span>~2023</span>
                    </li>
                  </ul>
                </div>

                <div className="info-box">
                  <h4>License</h4>
                  <div className="line"></div>

                  <ul>
                    <li>
                      <strong>웹디자인 기능사</strong>
                      <span>2026</span>
                    </li>
                    <li>
                      <strong>GTQ 포토샵 1급</strong>
                      <span>2026</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="about-right">
                <div className="info-box skills-box">
                  <h4>Skills</h4>
                  <div className="line"></div>

                  <div className="accordion">
                    {skillData.map((skill, index) => (
                      <div
                        className={`accordion-item ${openIndex === index ? 'active' : ''}`}
                        key={index}
                      >
                        <button
                          className="accordion-head"
                          onClick={() => toggleAccordion(index)}
                          type="button"
                        >
                          <div className="head-left">
                            <span className="icon">{skill.icon}</span>
                            <span className="label">{skill.title}</span>
                          </div>
                          <span className="arrow"></span>
                        </button>

                        <div className="accordion-body">
                          <ul>
                            {skill.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPre;