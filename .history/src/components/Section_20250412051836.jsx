// src/components/Section.jsx
import React from 'react';
import '..//Section.css'; // Import the custom CSS file

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </section>
  );
};

export default Section;
