import React from 'react'
import './Scrollup.css'

export default function Scrollup() {
    window.addEventListener('scroll',function(){
        const scrollUp=this.document.querySelector('.scrollup')
        // when the scroll is higher than 460 viewer point im adding the show-scroll class to a tag with the scroll-top class
        if (this.scrollY >=460)  scrollUp.classList.add('show-scroll');
        else scrollUp.classList.remove('show-scroll')
    })
  return (
    <a href='#' className='scrollup'>
        <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  )
}
