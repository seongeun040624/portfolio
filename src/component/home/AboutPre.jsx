import React, { useEffect, useRef, useState } from 'react';
import '../../style/aboutPre.scss';

const AboutPre = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const wheelLockRef = useRef(false);

  const introData = [
    {
      id: '01',
      title: 'Identity',
      desc: '사용자 중점의 디자인과 인터랙티브 웹을 제작합니다.',
      keywords: ['#InteractiveDesign', '#FrontendDeveloper', '#UiUxDesign'],
      image: '/img/hero1.jpg',
      targetId: 'identity',
    },
    {
      id: '02',
      title: 'Strengths',
      desc: '사용자 시선의 흐름과 화면의 리듬을 고려해 인터랙션을 설계하고 반응형 웹 구현에 강점을 두고 있습니다.',
      keywords: ['#Interaction', '#Responsive', '#UIFlow'],
      image: '/img/hero3.jpg',
      targetId: 'strengths',
    },
    {
      id: '03',
      title: 'Process',
      desc: '다양한 레퍼런스를 분석하고 구조를 정리한 뒤 컴포넌트 단위로 구현하며 반복 수정으로 완성도를 높입니다.',
      keywords: ['#Research', '#Build', '#Improve'],
      image: '/img/hero4.jpg',
      targetId: 'process',
    },
  ];

  useEffect(() => {
    const handleReveal = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.85) {
        setIsVisible(true);
      }
    };

    handleReveal();
    window.addEventListener('scroll', handleReveal);

    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  useEffect(() => {
    const isSectionPinned = () => {
      if (!sectionRef.current) return false;

      const rect = sectionRef.current.getBoundingClientRect();
      const stickyStart = rect.top <= 80;
      const stickyEnd = Math.abs(rect.top - 80) < rect.height - window.innerHeight;

      return stickyStart && stickyEnd;
    };

    const moveToSectionEdge = (direction) => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const leaveDownY = sectionTop + sectionHeight - window.innerHeight + 2;
      const leaveUpY = sectionTop - 2;

      window.scrollTo({
        top: direction > 0 ? leaveDownY : leaveUpY,
        behavior: 'smooth',
      });
    };

    const handleWheel = (e) => {
      if (!sectionRef.current) return;
      if (!isSectionPinned()) return;

      if (wheelLockRef.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 6) return;

      if (delta > 0) {
        if (activeIndex < introData.length - 1) {
          e.preventDefault();
          wheelLockRef.current = true;
          setActiveIndex((prev) => prev + 1);

          setTimeout(() => {
            wheelLockRef.current = false;
          }, 450);
        } else {
          wheelLockRef.current = true;
          moveToSectionEdge(1);

          setTimeout(() => {
            wheelLockRef.current = false;
          }, 650);
        }
      } else {
        if (activeIndex > 0) {
          e.preventDefault();
          wheelLockRef.current = true;
          setActiveIndex((prev) => prev - 1);

          setTimeout(() => {
            wheelLockRef.current = false;
          }, 450);
        } else {
          wheelLockRef.current = true;
          moveToSectionEdge(-1);

          setTimeout(() => {
            wheelLockRef.current = false;
          }, 650);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeIndex, introData.length]);

  const handleCardClick = (index, targetId) => {
    setActiveIndex(index);

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setTimeout(() => {
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 350);
  };

  return (
    <section className="aboutPre" ref={sectionRef}>
      <div className="aboutSticky">
        <div className="inner">
          <div className="aboutTop">
            <div className={`reveal-text delay1 ${isVisible ? 'show' : ''}`}>
              <span className="text">About Me</span>
              <span className="cover primary"></span>
              <span className="cover secondary"></span>
            </div>
          </div>

          <div className="intro">
            <div className="introLeft">
              {introData.map((item, index) => (
                <div
                  className={`introCard ${activeIndex === index ? 'active' : ''}`}
                  key={item.id}
                  onClick={() => handleCardClick(index, item.targetId)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCardClick(index, item.targetId);
                    }
                  }}
                >
                  <div className="introNum">{item.id}</div>

                  <div className="introTxt">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>

                    <div className="keyword">
                      {item.keywords.map((keyword, idx) => (
                        <span key={idx}>{keyword}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="introRight">
              <div className="introImg">
                <div
                  className="introImgTrack"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {introData.map((item) => (
                    <div className="introImgSlide" key={item.id}>
                      <img src={item.image} alt={item.title} />
                    </div>
                  ))}
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