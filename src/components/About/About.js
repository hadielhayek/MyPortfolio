import React from 'react'
import './About.css'
import CV from '../../assets/Hadi Hayek_cv.pdf'
import Info from './Info'
import hadi from '../../assets/hadi.jpeg'

export default function About() {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>My introduction</span>
      <div className='about__container container grid'>
        <img src={hadi} alt='' className='about__img'></img>
        <div className='about__data'>
          <Info />
          <p className='about__description'>
            Full stack web developer,responsible for designing and developing websites and platforms. Work with design teams to ensure that 
            user interactions on web pages are intuitive and engaging
          </p>
          <a download=''
            href={CV} className='button button--flex'>Download Resume</a>
        </div>
      </div>
    </section>

  )
}
