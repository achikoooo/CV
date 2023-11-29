import React from 'react'
import './about.css'
import AboutImg from '../../assets/Abaut.jpg'
import CV from '../../assets/CV.pdf'
import Info from './Info'
import Files from './Files'

const About = () => {
  return (
    <section className='about' id='about'>
      <h2 className='section__title'>About me</h2>
      <span className='section__subtitle'>My introduction</span>
      <div className='about__container container grid'>
        <img className='about__img' src={AboutImg} alt='about' />
        <div className='about__data'>
          <Info />
          <p className='about__description'>
            "Hello world! 👋 As a passionate front-end developer, I turn
            creativity into code. Let's craft digital experiences together! 🚀
            #FrontEndMagic ✨"
          </p>
          <a download='' href={CV} className='button button--flex'>
            Download CV
            <Files />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
