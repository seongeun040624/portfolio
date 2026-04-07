import React from 'react';

import '../style/footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="inner">
                <p className="footer-logo">POPOL</p>
                <p>
                감각적인 화면 구성과 인터랙션을 고민하는 프론트엔드 포트폴리오입니다.
                </p>
                <p>© 2026 POPOL. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;