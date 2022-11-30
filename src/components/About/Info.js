import React from 'react'

export default function Info() {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <i class='bx bx-award about__icon' ></i>
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'>2 Years</span>
        </div>
        <div className='about__box'>
        <i class='bx bx-support about__icon'></i>

            <h3 className='about__title'> Clients</h3>
            <span className='about__subtitle'> 4+</span>
        </div>
        <div className='about__box'>
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className='about__title'>Worked on</h3>
            <span className='about__subtitle'> 7+ Projects</span>
        </div>
     
    </div>
  )
}
