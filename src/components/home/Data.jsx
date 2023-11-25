import React from 'react';
import Hand from './Hand';
import Send from './Send';

const Data = () => {
  return (
    <div className='home__data'>
      <h1 className='home__title'>
        Archil
        <Hand />
      </h1>
      <h3 className='home__subtitle'>Web Developer</h3>
      <p className='home__description'>
        Hey there! I am a web developer passionate about crafting
        digital experiences. Dive into my portfolio and let's bring your ideas
        to life! 🚀
      </p>
      <a href='#contact' className='button button--flex'>
        Say Hello
        <Send />
      </a>
    </div>
  );
};

export default Data;
