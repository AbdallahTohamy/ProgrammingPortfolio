import React, { useState, forwardRef } from 'react';
import logo from '../../logo.svg';
import styles from './home.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { facebook } from '@fortawesome/free-solid-svg-icons'
// import { facebook } from '@fortawesome/free-regular-svg-icons'
import { faFacebook,faLinkedin,faSquareUpwork,faFonticons } from '@fortawesome/free-brands-svg-icons'

const Home=forwardRef( function Home({ ...props },ref) {
    return (
        <>
            <div style={{ height: '100vh' }} className={`${styles.homeImage} d-flex justify-content-center align-items-center w-100 position-absolute`}>

            </div>
            <div {...props} ref={ref}  style={{ height: '100vh' }} className={`d-flex justify-content-center align-items-center w-100 ${styles.mainContainer}`}>
                <div className='row w-100'>
                    <div className='col-12'>
                        <div className=''>
                            <h1 className={`${styles.headerFontSize} text-white`}>
                                {/* Welcome to my place, I am */}
                                <span> Hey, I am  </span>
                                <span className=' text-nowrap' style={{ color: '#ffd700' }}>
                                    Abdallah El Tohamy
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className={`col-12`}>
                        <p className={`text-white  ${styles.paragraphFontSize}`}>
                            A multitalented professional who is skilled in engineering and programming, <br />
                            I integrate technical knowledge with innovative software solutions, <br />
                            bridging the gap between engineering design and technology.
                        </p>
                    </div>
                    <div className='col-12 text-white'>
                        <a className={`${styles.socialLink}`} target='_blank' href="https://www.linkedin.com/in/abdallah-el-tohamy-75bb432a8/">
                        <FontAwesomeIcon className='fa-2x' icon={faLinkedin} />
                        </a>
                        <a className={`${styles.socialLink}`} target='_blank' href="https://www.fiverr.com/abdallah318">
                        <FontAwesomeIcon className='fa-2x mx-5 mt-4' icon={faFonticons} />
                        </a>
                        <a className={`${styles.socialLink}`} target='_blank' href="https://www.upwork.com/freelancers/~01aa362e1eb8de88b8">
                        <FontAwesomeIcon className='fa-2x' icon={faSquareUpwork} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
})
export default Home