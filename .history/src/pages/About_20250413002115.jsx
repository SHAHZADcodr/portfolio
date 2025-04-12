import React from 'react';
import Section from '../components/Section';
import "../App.css"

const About = () => (
  <Section id="about" title="About Me">
    <p>
      Hello! I'm <span className="highlight">Shahzad</span>, a frontend & backdeveloper with a deep passion for crafting clean and interactive user interfaces.
      <br /><br />
      I was born and raised in <span className="highlight">Lucknow, Uttar Pradesh</span>, where I completed my schooling. Driven by curiosity and a love for technology, I moved to <span className="highlight">Dehradun, Uttarakhand</span> to pursue my Bachelor's degree after 12th grade.
      <br /><br />
      Beyond the world of coding, I enjoy expressing myself through <span className="highlight">Shayari</span> (poetry), which allows me to blend creativity with emotion. I’m also a huge <span className="highlight">cricket fan</span> and love spending time listening to soulful <span className="highlight">Ghazals</span>—both of which bring balance and joy to my daily routine.
      <br /><br />
      Whether it's writing elegant code or verses of poetry, I believe in putting my heart into everything I do.
    </p>
  </Section>
);

export default About;
