// src/components/Section.jsx
import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white bg-gray-900"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400 uppercase">{title}</h2>
      <div className="max-w-3xl text-center text-lg leading-relaxed">{children}</div>
    </section>
  );
};

export default Section;
