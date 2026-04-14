import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaReact,
  FaGithubSquare,
  FaFigma,
  FaCss3Alt,
} from 'react-icons/fa';
//import { SiGithub, SiVercel, SiAdobephotoshop } from 'react-icons/si';
//import { IoLogoJavascript } from 'react-icons/io5';
//import { TbApi } from 'react-icons/tb';

import { projectData } from '../data/projectData';
import '../style/projectDetail.scss';

const iconMap = {
  react: <FaReact />,
  scss: <FaCss3Alt />,
  //javascript: <IoLogoJavascript />,
  //github: <FaGithubSquare />,
 // vercel: <SiVercel />,
  //photoshop: <SiAdobephotoshop />,
  //figma: <FaFigma />,
  //api: <TbApi />,
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="projectDetail notFound">
        <div className="inner">
          <h2>Project not found</h2>
          <Link to="/projects">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const detail = project.detail || {};
  const heroImage = detail.heroImage || project.image;
  const imageSections = detail.imageSections || [];

  return (
    <div className="projectDetail">
      <section className="detailHero">
        <img src={heroImage} alt={project.title} />
        <div className="heroTitle">
          <h1>{project.title}</h1>
        </div>
      </section>

      <section className="detailInfo">
        <div className="inner">
          <div className="infoLeft">
            <div className="dummyBox"></div>

            <ul className="metaList">
              <li>
                <strong>Site :</strong>
                <a href={project.site} target="_blank" rel="noreferrer">
                  {project.site.replace(/^https?:\/\//, '')}
                </a>
              </li>

              <li>
                <strong>Category :</strong>
                <span>{project.category}</span>
              </li>

              <li>
                <strong>Responsive :</strong>
                <span>{project.responsive}</span>
              </li>

              <li>
                <strong>Type :</strong>
                <span>{project.type} - {project.people}</span>
              </li>

              <li>
                <strong>Duration :</strong>
                <span>{project.duration}</span>
              </li>
            </ul>

            <div className="toolBox">
              <strong>Tools :</strong>

              <div className="toolList">
                {project.tools.map((tool, index) => (
                  <div className="toolItem" key={`${tool.name}-${index}`}>
                    <i>{iconMap[tool.icon] || null}</i>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="desc">{project.desc}</p>
          </div>

          <div className="infoRight">
            <div className="textGroup">
              <h3>{detail.overviewTitle}</h3>
              <p>{detail.overviewText}</p>
            </div>

            <div className="textGroup">
              <h4>Contribution</h4>
              <p>{detail.contribution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="detailGallery">
        <div className="inner">
          {imageSections.map((section, sectionIndex) => {
            if (section.type === 'full') {
              return (
                <div className="galleryRow full" key={sectionIndex}>
                  {section.images.map((img, imgIndex) => (
                    <div className="imgBox" key={imgIndex}>
                      <img src={img.src} alt={img.alt} />
                    </div>
                  ))}
                </div>
              );
            }

            if (section.type === 'half') {
              return (
                <div className="galleryRow half" key={sectionIndex}>
                  {section.images.map((img, imgIndex) => (
                    <div className="imgBox" key={imgIndex}>
                      <img src={img.src} alt={img.alt} />
                    </div>
                  ))}
                </div>
              );
            }

            if (section.type === 'sidebar') {
              return (
                <div className="galleryRow sidebar" key={sectionIndex}>
                  <div className="sideColumn">
                    {section.images.slice(0, 3).map((img, imgIndex) => (
                      <div className="imgBox small" key={imgIndex}>
                        <img src={img.src} alt={img.alt} />
                      </div>
                    ))}
                  </div>

                  <div className="imgBox large">
                    <img src={section.images[3]?.src} alt={section.images[3]?.alt} />
                  </div>
                </div>
              );
            }

            if (section.type === 'split') {
              return (
                <div className="galleryRow split" key={sectionIndex}>
                  <div className="imgBox wide">
                    <img src={section.images[0]?.src} alt={section.images[0]?.alt} />
                  </div>

                  <div className="imgBox narrow">
                    <img src={section.images[1]?.src} alt={section.images[1]?.alt} />
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;