import React from 'react'
import './Home.css'

export default function Data() {
  return (
    <div className='home__data'>
        <h1 className='home__title'> Hadi El Hayek</h1>
        <h3 className='home__subtitle'>Web Developer</h3>
        <p className='home__description'
        >Junior developer who's authentic, sociable,
             willing to take responsibility,
              and works hard to accomplish his aspirations.</p>
              <a href ='#contact' className='button button--flex'> Say Hello</a>
    </div>
  )
}
