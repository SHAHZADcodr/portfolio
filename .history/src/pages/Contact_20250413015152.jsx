import React from 'react';
import Section from '../components/Section';

const Contact = () => (
  <Section id="contact" title="Contact Me">
    <div className="flex justify-center items-center h-40 sm:h-60 md:h-80 lg:h-96">
      <p className="text-center text-lg sm:text-xl md:text-2xl">
        Email: <a className="text-cyan-400 underline" href="mailto:you@example.com">callme</a>
      </p>
    </div>
  </Section>
);

export default Contact;
