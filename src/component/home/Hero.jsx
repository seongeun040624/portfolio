import React from 'react';
import '../../style/hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-title-wrap">
                <div className="hero-main">
                    <div className="reveal-text delay1">
                        <span className="text title">Seongeun’s</span>
                        <span className="cover primary"></span>
                        <span className="cover secondary"></span>
                    </div>

                    <div className="reveal-text delay2">
                        <span className="text title">Portfolio</span>
                        <span className="cover primary"></span>
                        <span className="cover secondary"></span>
                    </div>
                </div>

                <div className="hero-desc">
                    <div className="reveal-text fade-text delay3">
                        <span className="text desc-ko">디자인 전공을 바탕으로 사용자 경험을 이해하고</span>
                    </div>

                    <div className="reveal-text fade-text delay4">
                        <span className="text desc-ko">프론트엔드 개발로 확장시키는 인재입니다.</span>
                    </div>

                    <div className="reveal-text fade-text delay5">
                        <span className="text desc-en">Designing intuitive and engaging user experiences</span>
                    </div>
                </div>
            </div>

            <div className="heroSwip">
                <img src="/img/hero2.jpg" alt="heroImg2" />
                <div className="bg"></div>
            </div>
        </section>
    );
};

export default Hero;