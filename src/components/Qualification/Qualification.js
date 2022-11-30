import React, { useState } from 'react'
import './Qualification.css'

export default function Qualification() {
    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (

        <section className='qualification section' id='qualification'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personel journey</span>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div   onClick={()=>toggleTab(2)} className={toggleState == 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}>
                        <i class='uil uil-graduation-cap qualification__icon' ></i>Education
                    </div>
                    <div  onClick={()=>toggleTab(1)} className={toggleState == 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}>
                        <i class='uil uil-briefcase-alt qualification__icon' ></i>Experience
                    </div>
                </div>

                <div className='qualification__sections'>
                    <div className={ toggleState ==1 ? 'qualification__content qualification__content-active' 
                     :'qualification__content'} >
                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>FrontEnd Web Developer</h3>
                                <span
                                    className='qualification__subtitle'>Alpha Edi 'France'</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>Sep-Nov 2022
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>FrontEnd Web Developer</h3>
                                <span
                                    className='qualification__subtitle'>KheirwBarake</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>May-July 2022
                                </div>
                            </div>
                        </div>
                 </div>

                        <div className={ toggleState ==2 ? 'qualification__content qualification__content-active' 
                     :'qualification__content'} onClick={()=>toggleTab(1)}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Full Stack Web Developer </h3>
                                <span
                                    className='qualification__subtitle'>Codi Tech  Bootcamp</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>Oct-2021/Aug-2022
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                            

                        <div className='qualification__data'>
                          
                         
                            <div>
                                <h3 className='qualification__title'>MIS </h3>
                                <span
                                    className='qualification__subtitle'>Akram Ouwayda Institue</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>2018-2020
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                  </div>

                    

                </div>
            </div>


        </section>
    )
}
