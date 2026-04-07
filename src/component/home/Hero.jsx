import React from 'react';

import '../../style/hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-title-wrap">
                <div className="reveal-text delay1">
                    <span className="text">정성은의</span>
                    <span className="cover primary"></span>
                    <span className="cover secondary"></span>
                </div>

                <div className="reveal-text delay2">
                    <span className="text">포트폴리오입니다</span>
                    <span className="cover primary"></span>
                    <span className="cover secondary"></span>
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