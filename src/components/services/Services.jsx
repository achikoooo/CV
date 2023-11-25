import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What i offer</span>
      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <i className='uil uil uil-html5 services__icon services__icon-html'></i>
            <h3 className='service__title'>
              HTML <br /> CSS
            </h3>
          </div>
          <span className='services__button' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
          <div
            className={
              toggleState === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>
              <h3 className='services__modal-title'>Code Artisan</h3>
              <p className='services__Modal-description'>
                Passionate HTML and CSS developer, crafting seamless and
                visually engaging web experiences.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    SCSS/SASS: Elevating styles, streamlining code.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Gulp: Automating workflows for efficient development
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    BEM: Structuring CSS for modular clarity.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    @media: Responsive design for versatile layouts.
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Bootstrap: Robust, classic styling framework.
                  </p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Tailwind: Streamlined, utility-first CSS framework.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='services__content'>
          <div>
            <i className='uil uil-react services__icon '></i>
            <h3 className='service__title'>
              React <br /> Redux
            </h3>
          </div>
          <span className='services__button' onClick={() => toggleTab(2)}>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
          <div
            className={
              toggleState === 2
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>
              <h3 className='services__modal-title'> Building with React</h3>
              <p className='services__Modal-description'>
                Passionate React developer crafting dynamic, responsive, and
                intuitive user interfaces for seamless digital experiences.
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    State management for dynamic data handling
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Component lifecycle: optimizing performance effectively.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    React Hooks: Simplifying complex state logic.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Responsive UI design with conditional rendering.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='services__content'>
          <div>
            <i className='uil uil-java-script services__icon'></i>
            <h3 className='service__title'>JavaScript</h3>
          </div>
          <span className='services__button' onClick={() => toggleTab(3)}>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
          <div
            className={
              toggleState === 3
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>
              <h3 className='services__modal-title'> JavaScript</h3>
              <p className='services__Modal-description'>
                JavaScript: Crafting interactive and dynamic experiences
              </p>
              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    TypeScript: Strongly typed, scalable JavaScript enhancement
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Node.js: Scalable, efficient runtime environment.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Next.js: React-powered framework for seamless development.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    JSX: Expressive syntax for React components.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
