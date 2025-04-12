// src/components/Section.jsx
import React from 'react';
import '../customcss/Section.css';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="section">
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
