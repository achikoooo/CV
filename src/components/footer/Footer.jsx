import './footer.css';
import React from 'react';
import FooterLogo from "../../assets/footer-logo.png"

const Footer = () => {
  return (
    <footer>
      <div className='footer__container container'>
        <h1 className='footer__title'>
          {' '}
          <img src={FooterLogo} alt='Logo' />
        </h1>
        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>
          <li>
            <a href='#portfolio' className='footer__link'>
              Projects
            </a>
          </li>
          <li>
            <a href='#testimonials' className='footer__link'>
              Testimonials
            </a>
          </li>
        </ul>
        <div className='footer__social'>
          <a
            href='https://www.instagram.com/achi_achikoo/'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
            title='Instagram'
          >
            <i className='uil uil-instagram '></i>
          </a>
          <a
            href='https://www.linkedin.com/in/%E1%83%90%E1%83%A0%E1%83%A9%E1%83%98%E1%83%9A-%E1%83%91%E1%83%9D%E1%83%9A%E1%83%A5%E1%83%95%E1%83%90%E1%83%AB%E1%83%94-365ab4152/'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
            title='Linkedin'
          >
            <i className='uil uil-linkedin '></i>
          </a>
          <a
            href='https://github.com/achikoooo'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
            title='Git-Hub'
          >
            <i className='uil uil-github-alt '></i>
          </a>
        </div>
        <span className='footer__copy'>
          &#169; Crypticalcoder. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
