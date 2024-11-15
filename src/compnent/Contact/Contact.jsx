import React, { useState, forwardRef } from 'react';
import logo from '../../logo.svg';
// import mortarboard from './mortarboard.svg'
// import caseBag from './case.svg'
// import rowing from './rowing.svg'
import styles from './Contact.module.css';
import { ReactSVG } from 'react-svg';
import email from './Icons/email.svg'
import address from './Icons/address.svg'
import phone from './Icons/phone.svg'
// import info from './about.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { facebook } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faLinkedin, faSquareUpwork, faFonticons } from '@fortawesome/free-brands-svg-icons'

const Projects = forwardRef(function Projects({ ...props }, ref) {
    return (
        <>
            {/* <div style={{ height: '100vh' }} className={`${styles.homeImage} d-flex justify-content-center align-items-center w-100 position-absolute`}>

            </div> */}
            <div id='contact-section' className="divider"></div>
            <div ref={ref} {...props} className={`d-flex justify-content-center align-items-top mt-5 mb-5 w-100 ${styles.mainContainer}`}>
                <div className='row w-100'>
                    <div className="col-12 my-5 w-100">
                        <div className={` w-100 text-white`}>
                            <h1 className={`${styles.title} position-relative`}>
                                Contact Info
                            </h1>
                        </div>
                    </div>
                    <div className={`${styles.advertisersServiceSecCol} col-lg-4 `}>
                        <div className={`${styles.serviceCard} text-white`}>
                            <div className={`${styles.iconWrapper}`}>
                                {/* <FontAwesomeIcon className='fa-3x' icon={faLinkedin} /> */}
                                {/* <ReactSVG
                                    className={`${styles.iconStyles} d-flex align-items-center justify-content-center w-100`} src={phone} /> */}

                                <FontAwesomeIcon className={`${styles.iconStyles} fa-4x`} icon={faEnvelope} />

                                {/* <Mortarboard/> */}
                            </div>
                            <h3 className={`${styles.advertisersServiceSecH3}`}>Email Address</h3>
                            <p className={`${styles.advertisersServiceSecP} px-lg-5`}>
                                <a className={`text-white text-decoration-none ${styles.emailBtn}`} href="mailto:abdallah22335@gmail.com">abdallah22335a@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.advertisersServiceSecCol} col-lg-4 `}>
                        <div className={`${styles.serviceCard} text-white`}>
                            <div className={`${styles.iconWrapper}`}>
                                {/* <FontAwesomeIcon className='fa-3x' icon={faLinkedin} /> */}
                                <ReactSVG
                                    className={`${styles.iconStyles} d-flex align-items-center justify-content-center w-100`} src={phone} />

                                {/* <FontAwesomeIcon className={`${styles.iconStyles} fa-4x`} icon={faEnvelope} /> */}

                                {/* <Mortarboard/> */}
                            </div>
                            <h3 className={`${styles.advertisersServiceSecH3}`}>Phone</h3>
                            <p className={`${styles.advertisersServiceSecP} px-lg-5`}>
                                <a className={`text-white text-decoration-none ${styles.emailBtn}`} href="https://wa.me/201156861435">+201156861435</a>
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.advertisersServiceSecCol} col-lg-4 `}>
                        <div className={`${styles.serviceCard} text-white`}>
                            <div className={`${styles.iconWrapper}`}>
                                {/* <FontAwesomeIcon className='fa-3x' icon={faLinkedin} /> */}
                                <ReactSVG
                                    className={`${styles.iconStyles} d-flex align-items-center justify-content-center w-100`} src={address} />

                                {/* <FontAwesomeIcon className={`${styles.iconStyles} fa-4x`} icon={faEnvelope} /> */}

                                {/* <Mortarboard/> */}
                            </div>
                            <h3 className={`${styles.advertisersServiceSecH3}`}>Address</h3>
                            <p className={`${styles.advertisersServiceSecP} px-lg-5`}>
                                <a className={`text-white text-decoration-none ${styles.emailBtn}`}>Cairo, Egypt</a>
                            </p>
                        </div>
                    </div>
                    <div className={`col-12 w-100 d-flex justify-content-center align-items-center`}>
                        {/* <a href={CV} download className={`${styles.button} text-decoration-none text-dark`}>Download CV</a> */}
                    </div>
                </div>
            </div>
        </>
    )
})
export default Projects