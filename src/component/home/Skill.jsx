import React, { useEffect, useRef, useState } from 'react';
import '../../style/skill.scss';

import { FaHtml5 } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";


import { FaFigma } from "react-icons/fa6";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { TbBrandAdobeIndesign } from "react-icons/tb";
import { TbBrandAdobePremier } from "react-icons/tb";
import { TbBrandAdobeAfterEffect } from "react-icons/tb";

import { FaGithub } from "react-icons/fa6";
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5"; // 바탕필요
import { SiFirebase } from "react-icons/si";
//미드저니랑 런웨이는 넣을거면 아이콘 찾아서 넣어야 함 리액트 아이콘에는 없음.

const skillData = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', percent: 90, icon:<FaHtml5 />  },
      { name: 'CSS | SCSS', percent: 90, icon:<FaCss /> },
      { name: 'JavaScript', percent: 80, icon:<IoLogoJavascript /> },
      { name: 'React', percent: 80, icon:<FaReact /> },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'Figma', percent: 90, icon:<FaFigma /> },
      { name: 'Photoshop', percent: 90, icon:<TbBrandAdobePhotoshop /> },
      { name: 'Illustrator', percent: 90, icon:<TbBrandAdobeIllustrator /> },
      { name: 'Indesign', percent: 80, icon:<TbBrandAdobeIndesign /> },
      { name: 'Premiere Pro', percent: 70, icon:<TbBrandAdobePremier /> },
      { name: 'After Effects', percent: 70, icon:<TbBrandAdobeAfterEffect /> },
    ],
  },
  {
    category: 'Tools',
    items: [
        { name: 'VS Code', percent: 90, icon:<VscVscodeInsiders /> },
        { name: 'GitHub', percent: 80, icon:<FaGithub /> },
        { name: 'Vercel', percent: 75, icon:<IoLogoVercel /> },
        { name: 'Firebase', percent: 70, icon:<SiFirebase /> },
        { name: 'MidJourney', percent: 70, icon:<FaHtml5 /> },
        { name: 'Runway', percent: 70, icon:<FaHtml5 /> },
    ],
  },
];

const Skill = () => {
  const skillRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (skillRef.current) observer.observe(skillRef.current);

    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, []);

  return (
    <section className="skill" ref={skillRef}>
      <div className="inner">
        <div className="skill-head">
          <div className={`reveal-text delay1 ${isVisible ? 'show' : ''}`}>
            <span className="text">skills</span>
            <span className="cover primary"></span>
            <span className="cover secondary"></span>
          </div>
        </div>

        <div className="skill-columns">
          {skillData.map((group, groupIndex) => (
            <div
              className={`skill-column ${isVisible ? 'show' : ''}`}
              key={group.category}
              style={{ transitionDelay: `${groupIndex * 0.15}s` }}
            >
              <h3>{group.category}</h3>

              <div className="skill-list">
                {group.items.map((item, itemIndex) => (
                  <div
                    className={`skill-item ${isVisible ? 'show' : ''}`}
                    key={item.name}
                    style={{
                      transitionDelay: `${0.2 + groupIndex * 0.12 + itemIndex * 0.06}s`,
                    }}
                  >
                    <div className="skill-top">
                      <div className="skill-icon">{item.icon}</div>

                      <div className="skill-info">
                        <div className="skill-row">
                          <span className="skill-name">{item.name}</span>
                          <span className="skill-percent">{item.percent}%</span>
                        </div>

                        <div className="skill-bar">
                          <div
                            className="skill-fill"
                            style={{
                              width: isVisible ? `${item.percent}%` : '0%',
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;