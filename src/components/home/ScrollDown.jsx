import React from 'react';
import Scroll from './Scroll';

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
      <a href='#portfolio' className='home__scroll-button button-flex'>
        <Scroll />
        <span className='home__scroll-name'>See the portfolio</span>
        <i class='uil uil-arrow-down home__scroll-arrow'></i>
      </a>
    </div>
  );
};

export default ScrollDown;
