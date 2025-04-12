import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
