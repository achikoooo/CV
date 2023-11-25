import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import Send from '../home/Send.jsx';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xkjjdwd',
      'template_033dzm3',
      form.current,
      'XWIhucTnxqNvOP90f'
    );
    e.target.reset();
  };
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact Me</span>
      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='conatact__title'>Talk to me</h3>
          <div className='contact__info'>
            <div className='contact__card'>
              <i className='uil uil-envelope-upload contact__card-icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>sitsocker@gmail.com</span>
              <a
                href='https://mail.google.com/'
                target='_blank'
                className='contact__button'
                rel='noreferrer'
                title='Gmail'
              >
                Write me
                <i class='uil uil-arrow-right contact__button-icon'></i>
              </a>
            </div>
            <div className='contact__card'>
              <i className='uil uil-whatsapp contact__card-icon'></i>
              <h3 className='contact__card-title'>Whatsapp</h3>
              <span className='contact__card-data'>+995 568 51 52 20</span>
              <a
                href='tel:995568515220'
                className='contact__button'
                title='Whatsapp'
              >
                Write me
                <i class='uil uil-arrow-right contact__button-icon'></i>
              </a>
            </div>
            <div className='contact__card'>
              <i className='uil uil-message contact__card-icon'></i>
              <h3 className='contact__card-title'>Massanger</h3>
              <span className='contact__card-data'>Archil Bolkvadze</span>
              <a
                target='_blank'
                rel='noreferrer'
                title='Messenger'
                href='https://messenger.com/'
                className='contact__button'
              >
                Write me
                <i class='uil uil-arrow-right contact__button-icon'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='contact__content'>
          <h3 className='contact__title'>Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className='contact__form'>
            <div className='contact__form-div'>
              <label className='contact__fomr-tag'>Name</label>
              <input
                type='text'
                name='name'
                className='contact__form-input'
                placeholder='Insert your name'
              />
            </div>
            <div className='contact__form-div'>
              <label className='contact__fomr-tag'>Mail</label>
              <input
                type='email'
                name='email'
                className='contact__form-input'
                placeholder='Insert your email'
              />
            </div>
            <div className='contact__form-div contact__form-area'>
              <label className='contact__fomr-tag'>Project</label>
              <textarea
                className='contact__form-input'
                placeholder='Write your project'
                name='project'
                cols='30'
                rows='10'
              ></textarea>
            </div>
            <button className='button button--flex'>
              Send Message
              <Send />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
