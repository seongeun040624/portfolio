import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectDetail from '../../pages/ProjectDetail';

import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';
import { FaReact, FaGithubSquare, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandAdobePhotoshop, TbApi } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { SiCss, SiFirebase } from "react-icons/si";
import { IoIosMore } from "react-icons/io";


import '../../style/projectPre.scss';

const projectData = [
  {
    id: 'eclat',
    title: 'ÉCLAT',
    category: 'Branding Site',
    responsive: 'Responsive Web - updating',
    type: 'Team Project',
    people: '7 people',
    duration: '2 weeks',
    tools: [
      { name: 'React', icon: <FaReact /> },
      { name: 'SCSS', icon: <SiCss /> },
      { name: 'JavaScript', icon: <IoLogoJavascript /> },
      { name: 'GitHub', icon: <FaGithubSquare /> },
      { name: 'Vercel', icon: <IoLogoVercel /> },
      { name: 'Photoshop', icon: <TbBrandAdobePhotoshop /> },
      { name: 'Figma', icon: <FaFigma /> },
    ],
    desc: `ÉCLAT는 보이지 않는 빛의 향을 향으로 풀어내는 브랜드입니다. 일상 속에서 빛나는 감각적인 경험을 선사합니다.`,
    site: 'eclat-t.vercel.app',
    image: '/img/eclat.png',
    detailLink: '/projects/eclat',
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
      { name: 'React', icon: <FaReact /> },
      { name: 'SCSS', icon: <SiCss /> },
      { name: 'JavaScript', icon: <IoLogoJavascript /> },
      { name: 'OpenWeather API', icon: <TbApi /> },
      { name: 'GitHub', icon: <FaGithubSquare /> },
      { name: 'Vercel', icon: <IoLogoVercel /> },
      { name: 'Photoshop', icon: <TbBrandAdobePhotoshop /> },
      { name: 'Figma', icon: <FaFigma /> },
    ],
    desc: `날씨와 음악을 연결해 사용자에게 분위기 기반 경험을 제공하는 인터랙티브 웹 프로젝트입니다.`,
    site: 'mood-scape-umber.vercel.app',
    image: '/img/mood.jpg',
    detailLink: '/projects/moodscape',
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
        { name: 'React', icon: <FaReact /> },
        { name: 'SCSS', icon: <SiCss /> },
        { name: 'JavaScript', icon: <IoLogoJavascript /> },
        { name: 'TMDB API', icon: <TbApi /> },
        { name: 'GitHub', icon: <FaGithubSquare /> },
    ],
    desc: `TMDB 기반으로 제작한 영화 사이트입니다. 콘텐츠 탐색과 API 활용 중심으로 구성한 개인 프로젝트입니다.`,
    site: 'seongeun040624.github.io/TMDB_Movies/',
    image: '/img/movie-site.png',
    detailLink: '/projects/movie-site',
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
      { name: 'React', icon: <FaReact /> },
      { name: 'SCSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <IoLogoJavascript /> },
      { name: '식품의약품안전처 Open API', icon: <TbApi /> },
      { name: 'GitHub', icon: <FaGithubSquare /> },
      { name: 'Vercel', icon: <IoLogoVercel /> },
    ],
    desc: `API를 활용해 레시피 정보를 보기 쉽게 구성하고 카테고리별 탐색이 가능하도록 만든 개인 웹 프로젝트입니다.`,
    site: 'cooks-murex.vercel.app',
    image: '/img/recipe.png',
    detailLink: '/projects/recipe',
  },

  {
    id: 'trip',
    title: 'My Trip',
    category: 'Branding Site',
    responsive: 'Responsive Web',
    type: 'Personal Project',
    people: '1 person',
    duration: '1 week',
    tools: [
      { name: 'React', icon: <FaReact /> },
      { name: 'SCSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <IoLogoJavascript /> },
      { name: '위치 Open API', icon: <TbApi /> },
      { name: 'GitHub', icon: <FaGithubSquare /> },
      { name: 'Vercel', icon: <IoLogoVercel /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
    desc: `API를 활용해 위치와 지역 정보를 올리고 firebase를 활용해 실제 로그인이 가능한 사이트를 제작했습니다.`,
    site: 'github.com/seongeun040624/myTrip',
    image: '/img/mytrip.png',
    detailLink: '/projects/trip',
  },

  {
    id: 'hotel',
    title: 'Hoxton Hotel',
    category: 'Clone Site',
    responsive: 'Responsive Web',
    type: 'Personal Project',
    people: '1 person',
    duration: '1 week',
    tools: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'SCSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <IoLogoJavascript /> },
      { name: 'GitHub', icon: <FaGithubSquare /> },
    ],
    desc: `html을 사용한 클론코딩 사이트로 메인페이지 비주얼 중심 사이트를 카피했습니다.`,
    site: 'seongeun040624.github.io/hoxtonHotel/',
    image: '/img/hotel.png',
    detailLink: '/projects/hotel',
  },
  {
    id: 'bluebottle',
    title: 'Blue Bottle',
    category: 'Clone Site',
    responsive: 'Responsive Web',
    type: 'Personal Project',
    people: '1 person',
    duration: '1 day',
    tools: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'SCSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <IoLogoJavascript /> },
      { name: 'GitHub', icon: <FaGithubSquare /> },
    ],
    desc: `html을 사용한 클론코딩 사이트로 메인페이지 비주얼 중심 사이트를 카피했습니다.`,
    site: 'seongeun040624.github.io/blueBottle/',
    image: '/img/bluebottle.png',
    detailLink: '/projects/bluebottle',
  },
  {
    id: 'climate',
    title: '기후에너지환경부',
    category: 'Clone Site',
    responsive: 'Adaptive Web',
    type: 'Personal Project',
    people: '1 person',
    duration: '1 week',
    tools: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'SCSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <IoLogoJavascript /> },
      { name: 'GitHub', icon: <FaGithubSquare /> },
    ],
    desc: `html을 사용한 클론코딩 사이트로 메인페이지 비주얼 중심 사이트를 카피했습니다.`,
    site: 'seongeun040624.github.io/project2/',
    image: '/img/climate.png',
    detailLink: '/projects/climate',
  },
  {
    id: 'rustylake',
    title: 'Rusty Lake',
    category: 'Micro Site',
    responsive: 'Adaptive Web',
    type: 'Personal Project',
    people: '1 person',
    duration: '1 month',
    tools: [
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Photoshop', icon: <TbBrandAdobePhotoshop /> },
      { name: 'Illustrator', icon: <TbBrandAdobeIllustrator /> },
    ],
    desc: `Figma를 중점으로 활용한 마이크로 사이트로, 게임 홍보와 유저 유입을 위해 베타 버전의 게임을 체험할 수 있습니다.`,
    site: 'www.figma.com/proto/BgbXe1kWKhTqIhhjWE6a0E/2024_2-2-%EB%A9%80%ED%8B%B0%EB%AF%B8%EB%94%94%EC%96%B4?node-id=0-1&t=e4LHt2RumLYhKhjN-1',
    image: '/img/rustylake.png',
    detailLink: '/projects/rustylake',
  },

];

const ProjectPre = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openId, setOpenId] = useState('eclat');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleToggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="proPre" id="projects" ref={sectionRef}>
      <div className="inner">
        <div className={`reveal-text delay1 ${isVisible ? 'show' : ''}`}>
          <span className="text">Projects</span>
          <span className="cover primary"></span>
          <span className="cover secondary"></span>
        </div>

        <div className="project-list">
          {projectData.map((project, index) => {
            const isOpen = openId === project.id;

            return (
              <div
                key={project.id}
                className={`project-item ${isOpen ? 'open' : ''} ${isVisible ? 'show' : ''}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <button
                  className="project-summary"
                  onClick={() => handleToggle(project.id)}
                >
                  <div className="project-name">
                    {project.title}
                  </div>

                  <div className="project-category">
                    {project.category}
                  </div>

                  <div className="project-type">
                    {project.type}
                  </div>

                  <div className="project-icon">
                    {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
                  </div>
                </button>

                <div className={`project-content ${isOpen ? 'open' : ''}`}>
                  <div className="project-content-inner">
                    <div className="project-left">
                      <h3>{project.title}</h3>

                      <ul className="project-meta">
                        <li>{project.category}</li>

                        <li>{project.responsive}</li>

                        <li>
                          {project.type} - {project.people}
                        </li>

                        <li>
                          Duration : {project.duration}
                        </li>

                        <li>
                          <strong>Tools :</strong>

                          <div className="tool-icons">
                            {project.tools.map((tool, idx) => (
                              <span
                                key={idx}
                                className="tool-icon"
                                data-tooltip={tool.name}
                              >
                                {tool.icon}
                              </span>
                            ))}
                            <IoIosMore />
                          </div>
                        </li>
                      </ul>

                      <p className="project-desc">
                        {project.desc.split('\n').map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>

                      <p className="project-site">
                        Site :
                        <a
                          href={`https://${project.site} `}
                          target="_blank"
                          rel="noreferrer"
                        >
                           {project.site}
                        </a>
                      </p>

                      <Link
                        to={project.detailLink}
                        className="detail-btn"
                      >
                        See Detail →
                      </Link>
                    </div>

                    <div className="project-right">
                      <div
                        className="project-thumb"
                        data-tooltip="Preview"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectPre;