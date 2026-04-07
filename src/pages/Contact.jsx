import React from 'react';

import "../style/contact.scss";

const Contact = () => {
  return (
    <section className="contact-page page-layout">
      <div className="page-title">
        <p>Contact</p>
        <h2>함께 작업하고 싶다면 연락해주세요</h2>
      </div>

      <div className="contact-box">
        <p>Email</p>
        <h3>yourmail@example.com</h3>
      </div>

      <div className="contact-box">
        <p>GitHub</p>
        <h3>github.com/yourname</h3>
      </div>

      <div className="contact-box">
        <p>Behance / Notion</p>
        <h3>링크 추가 예정</h3>
      </div>
    </section>
  );
};

export default Contact;