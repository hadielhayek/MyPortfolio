import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form=useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yfs6515', 'template_qbghtcn', form.current, 'BICS--xB_SOE7wYU7')
         e.target.reset()
      };
    
    return (
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Get in touch</h2>
            <span className='section__subtitle'>Contact Me</span>


            <div className=' contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Talk to Me</h3>
                    <div className='contact__info'>
                        <div className='contact__card'>
                            <i className='bx bx-mail-send contact__card-icon'></i>

                            <h3 className='contact__card-title'>Email</h3>
                            <span className='contact__card-data'>hadi-hayek-20@hotmail.com</span>

                            <a href='mailto:hadi-hayek-20@hotmail.com' className='contact__button' target={'_blank'}>Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bx-message contact__card-icon'></i>

                            <h3 className='contact__card-title'>Number</h3>
                            <span className='contact__card-data'>+961 70 451 602</span>

                            <a href='https://api.whatsapp.com/send?phone=70451602' className='contact__button' target={'_blank'}>Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>

                        <div className='contact__card'>
                            <i className='uil uil-linkedin contact__card-icon'></i>

                            <h3 className='contact__card-title'>Linkedin</h3>
                            <span className='contact__card-data'>hadi-el-hayek</span>

                            <a href='https://www.linkedin.com/in/hadi-el-hayek-b9b531230/' className='contact__button' target={'_blank'}>Write me
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div className='contact__content'>
                    <h3 className='contact__title'>Write me your project</h3>

                    <form className='contact__form' ref={form} onSubmit={sendEmail}>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Mail</label>
                            <input type='email' name='email'
                                className='contact__form-input' placeholder='Insert your Name' required/>

                        </div>


                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Name</label>
                            <input type='text' name='name'
                                className='contact__form-input' placeholder='Insert your Name'required />

                        </div>

                        <div className='contact__form-div contact__form-area'>
                            <label className='contact__form-tag '>Project</label>
                            <textarea cols='30' rows='10' name='project'
                                className='contact__form-input' placeholder='Insert your Project' required></textarea> 

                        </div>
                        <button className='button button--flex'> Send Message</button>
                    </form>


                </div>
            </div>
        </section>
    )
}
