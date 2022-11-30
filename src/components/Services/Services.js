import React, { useState } from 'react'
import './Services.css'

export default function Services() {

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What i Offer</span>

            <div className='services__container container grid'>
                <div className='services__content'>
                    <div>
                        <i className='uil uil-web-grid services__icon'></i>
                        <h3 className='services__title'>
                            Development
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(1)}>View More
                        <i className='uil uil-arrow-right 
                    services__button-icon'></i></span>

                    <div className={toggleState === 1 ? 'services__modal active__modal' : 'services__modal'}>

                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>Development</h3>
                            <p className='services__modal-description'></p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                        Understanding, analyzing, and validating the business specifications in order to deliver a comprehensive product.
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                        Ensuring proper documentation of the program for easy tracking and understanding of modifications or change of code process.
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                        Keeping abreast of emerging technologies, through continued education, study, research, etc. in order to be able to deliver the most up-to-date products.
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                        Help maintaining existing projects including updating  and adding new content.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className='services__content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>
                            UI/UX
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(2)}>View More
                        <i className='uil uil-arrow-right 
                    services__button-icon'></i></span>

                    <div className={toggleState === 2 ? 'services__modal active__modal' : 'services__modal'}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'> UI/UX </h3>
                            <p className='services__modal-description'></p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                        Understand user needs. Gather user requirements. Conduct user research and evaluate user feedback.
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                        Produce clear UX/UI documentation. Illustrate business, technical and user requirements into design ideas using storyboards and process flows.                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                        Assist in the creation of guidelines for user interfaces in order to simplify user interaction and improve efficiency.                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                        Produce clear UX/UI documentation. Illustrate business, technical and user requirements into design ideas using storyboards and process flows.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                
                <div className='services__content'>
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>
                          More
                        </h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(3)}>View More
                        <i className='uil uil-arrow-right 
                    services__button-icon'></i></span>

                    <div className={toggleState === 3 ? 'services__modal active__modal' : 'services__modal'}>

                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                            <h3 className='services__modal-title'>More</h3>
                            <p className='services__modal-description'></p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                    Good communication skills
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                    Good attention to details

                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                    Enthusiasm for learning and using new technologies
                                    </p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'> </i>
                                    <p className='services__modal-info'>
                                    Sense of humor, positive approach and work well within a team
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
