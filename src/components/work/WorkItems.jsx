import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt='Img' className='work__img' />
      <h3 className='work__title'>{item.title}</h3>
      <a
        href='https://github.com/achikoooo'
        target='_blank'
        className='work__button'
        rel='noreferrer'
      >
        Git-Hub
        <i class='uil uil-arrow-right work__button-icon'></i>
      </a>
    </div>
  )
}

export default WorkItems
