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
        <div className='contact' ref={contactRef}>
            <div className='inner'>

                <div className={`reveal-text delay1 ${isVisible ? 'show' : ''}`}>
                    <span className="text">Contact</span>
                    <span className="cover primary"></span>
                    <span className="cover secondary"></span>
                </div>

                <div className={`contactTxt ${isVisible ? 'show' : ''}`}>

                    <span className='tel'>
                        TEL : 010 - 3176 - 5736
                    </span>

                    <span className='git'>
                        Git :{' '}
                        <a
                            href='https://github.com/seongeun040624'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            seongeun040624
                        </a>
                    </span>

                    <span className='email'>
                        Email :{' '}
                        <a href="mailto:seongeun040624@gmail.com">
                            seongeun040624@gmail.com
                        </a>
                    </span>

                    <span className='behance'>
                        Behance :{' '}
                        <a
                            href='https://www.behance.net/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            비핸스계정
                        </a>
                    </span>

                    <span className='notion'>
                        Notion : {' '}
                        <a
                            href='https://www.notion.so/Portfolio-33a0b6904f8c8005b722d43543228559'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Seongeun's Notion
                        </a>
                    </span>

                </div>

            </div>
        </div>
    );
};

export default Contact;