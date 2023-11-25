import React from 'react';

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <img
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAa1JREFUSEvN1T9IVmEUx/GPpQ2BhIFSW7nYFIJBk0tISkNUS0I4FDQIGSQN0dAfCqqhQoKGtpaoQSwarKCpCCIiDEIhgqYU+kP0ZwmsOPC88CY+997SF3rgTvfc3/ec3znPuU0afJoarK8KoB1H0YPulNALPMMlfChKsgwwhCtYkxH5hAO4k4MUAQ4l8fj2Lk7jDT5jG0awKwnvw43FIDlAJ15jBS7gWCbDkziF79iI9wvjcoCrGMYDDOBXgc/30I8TOFMV8A7r0YeHJZO2HffxHFuqAn6gBW3J8yLGWnzEl8WGIWdReLoarfhWUsE6zGIuVf1HeA4wgy704nEJIHo0mZ4dVS26iFHcxu4CQCQYgxC9OofjVQEdiCqiB3GLA7jwrMJ5HMFXbMbbqoCI24ub6YNxjOERNiAmJyoMG+MM4tbfXLRabNH81+tlN0LZLqoBYi3sSTaE8BQm6lbJkgE5gVoC/z8glt7+NIqRdSy/6/iZGrHkCl7W+V9r7lNsXS5A6EzjMJpxGZvqxuifK3iF+GXG3r+G+SS6EgdxFk+wM3fby8a0ZA2Vv2444DcK6U4ZFVq+pgAAAABJRU5ErkJggg=='
          alt='logo'
          className='about__icon'
        />

        <div className='about__title'>Experience</div>
        <div className='about__subtitle'>Less then 1 year</div>
      </div>
      <div className='about__box'>
        <img
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAK9JREFUSEvtlUEKgzAURJ+ncFEoiAu9TS/jpjewF/Ig3XQnFrroLSwBC4mYTto04CLZhsz7M/8nKUi8isT6KMAJ6IHWU8gN6IDBV6gCPIFSuByB+lfAvBz0FaL2ZURKQO07AJV36Dw4fbGtP4BDqEpoX2zA2q60v0A+nssAk1KO6OvL6ESWp2hfU3QHjn96iyagMlp2k81regGaSMgVOL9/OfWjRbJcB9FiWwLJHbwAvOE/GfQ8xIMAAAAASUVORK5CYII='
          alt='logo'
          className='about__icon'
        />
        <div className='about__title'>Completed</div>
        <div className='about__subtitle'>4 + Projects</div>
      </div>
      <div className='about__box'>
        <img
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYVJREFUSEvt1L9L1lEUx/GXNkQgRAhSoFJ/QBQ6NxYlRYJ/gGBRSYObQykFQUu0NFQQOTUbIiKILSGNJThFQYkOOhRNQRQoR67w9fL86KLP5hkv93ze93zOObdNi6OtxfqaAY5iCJdxDqexhe9Yxjym8bfeQxsBruB5Em1U6Ffcwbtal+oBHuBhSgiBF/iElXR2Fn24izPpbBxPckgtQAgHIMqexFP8q1NCWHgf93AEY3hWvZsDrmIWf3AJ7/9zCK7hLTs9vYAPu3lVQAe+4GQqPfwvid3KPyMs3Gl8FTCamho+x8TEtJRE2PUNpzCImRwwhwHcwFSJcuXuBB7hFW7lgDV0YxgL2CiEhLXX8RIf0Z8DfuNYEg3xKLUkNtGVEn6iMwfknjfb8hxeM78qcghoatEvHK8Yu58ehNaJvMkjaX7bsYiLJSNUWczY4NB6kwMK9fZc78Uq1tHT6LNrBKk3ZfGtPE6/wGvcPChA/ph4/Xn8OGhACC7hNmKb90TppBT3qeWAbQR2TRl9kBLfAAAAAElFTkSuQmCC'
          alt='logo'
          className='about__icon'
        />
        <div className='about__title'>Support</div>
        <div className='about__subtitle'>Online 24/7</div>
      </div>
    </div>
  );
};

export default Info;
