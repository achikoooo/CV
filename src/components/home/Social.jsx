import React from 'react';

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.instagram.com/achi_achikoo/'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
        title='Instagram'
      >
        <i className='uil uil-instagram '></i>
      </a>
      <a
        href='https://www.linkedin.com/in/%E1%83%90%E1%83%A0%E1%83%A9%E1%83%98%E1%83%9A-%E1%83%91%E1%83%9D%E1%83%9A%E1%83%A5%E1%83%95%E1%83%90%E1%83%AB%E1%83%94-365ab4152/'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
        title='Linkedin'
      >
        <i className='uil uil-linkedin '></i>
      </a>
      <a
        href='https://github.com/achikoooo'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
        title='Git-Hub'
      >
        <i className='uil uil-github-alt '></i>
      </a>
    </div>
  );
};

export default Social;
