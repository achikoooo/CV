import React from 'react';
import FrontEnd from './FrontEnd';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My tecnical level</span>
      <div className='skills__container container grid'>
        <FrontEnd />
      </div>
    </section>
  );
};

export default Skills;
