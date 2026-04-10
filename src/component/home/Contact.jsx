import React, { useEffect, useRef, useState } from 'react';
import '../../style/contact.scss';

const Contact = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.35 }
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <section className="contact" ref={contactRef}>
      <div className="inner">
        <div className={`reveal-text delay1 ${isVisible ? 'show' : ''}`}>
          <span className="text">Contact</span>
          <span className="cover primary"></span>
          <span className="cover secondary"></span>
        </div>

        <div className={`contact-line ${isVisible ? 'show' : ''}`}></div>

        <div className={`contactWrap ${isVisible ? 'show' : ''}`}>
          <div className="contactCol left">
            <div className="contactItem">
              <div className="iconBox"></div>
              <div className="infoBox">
                <p className="value">010 - 3176 - 5736</p>
              </div>
            </div>

            <div className="contactItem">
              <div className="iconBox"></div>
              <div className="infoBox">
                <a href="mailto:jse040624@naver.com" className="value">
                  jse040624@naver.com
                </a>
              </div>
            </div>
          </div>

          <div className="contactCol right">
            <div className="contactItem">
              <div className="iconBox"></div>
              <div className="infoBox">
                <a
                  href="https://github.com/seongeun040624"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="value"
                >
                  seongeun040624
                </a>
              </div>
            </div>

            <div className="contactItem">
              <div className="iconBox"></div>
              <div className="infoBox">
                <a
                  href="https://www.notion.so/Portfolio-33a0b6904f8c8005b722d43543228559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="value"
                >
                  seongeun040624
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;