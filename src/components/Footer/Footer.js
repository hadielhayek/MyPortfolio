import React from 'react'
import './Footer.css'

export default function Footer() {
    return (

        <footer className='footer'>

            <div className='footer__container '>
                <h1 className='footer__title'>Hayek</h1>
                
                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href='#portfolio' className='footer__link'>Portfolio</a>
                    </li>
                    <li>
                        <a href='#services' className='footer__link'>Services</a>
                    </li>
                </ul>
                <div className='footer__social'>
                    <a href='https://github.com/hadielhayek' className='footer__social-icon' target='_blank'>
                        <i class='uil uil-github-alt '></i>
                    </a>
                    <a href='https://www.linkedin.com/in/hadi-el-hayek-b9b531230/' className='footer__social-icon' target='_blank'>
                        <i class='uil uil-linkedin'></i>
                    </a>

                    {/* <a href='mailto:hadi-hayek-20@hotmail.com' className='footer__social-icon' target={'_blank'}>Write me
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                    </a> */}
                </div>
                <span className='footer__copy'>
                    &#169; Hadi El Hayek
                </span>
            </div>
        </footer>
    )
}
