import React, { useState, forwardRef } from 'react';
import logo from '../../logo.svg';
import mortarboard from './mortarboard.svg'
import caseBag from './case.svg'
import rowing from './rowing.svg'
import styles from './about.module.css';
import { ReactSVG } from 'react-svg';
import CV from './Abdallah-ElTohamy.pdf'
// import info from './about.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { facebook } from '@fortawesome/free-solid-svg-icons'
// import { facebook } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faLinkedin, faSquareUpwork, faFonticons } from '@fortawesome/free-brands-svg-icons'
import { initGA, trackEvent } from "../../analytics";

const About = forwardRef(function About({ ...props }, ref) {
    const downloadFile = async () => {
        const response = await fetch("https://app.flowcv.com/api/public/download_resume?token=6npo3va834");
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "My_Resume.pdf"; // Set file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        window.URL.revokeObjectURL(url); // Clean up
    };

    return (
        <>
            {/* <div style={{ height: '100vh' }} className={`${styles.homeImage} d-flex justify-content-center align-items-center w-100 position-absolute`}>

            </div> */}
            <div id='about-section' className="divider"></div>
            <div ref={ref} {...props} className={`d-flex justify-content-center align-items-top mt-5 w-100 ${styles.mainContainer}`}>
                <div className='row w-100'>
                    <div className="col-12 my-5 w-100">
                        <div className={` w-100 text-white`}>
                            <h1 className={`${styles.title} position-relative`}>
                                About Me
                            </h1>
                        </div>
                    </div>
                    <div className={`${styles.advertisersServiceSecCol} col-lg-4 `}>
                        <div className={`${styles.serviceCard} text-white`}>
                            <div className={`${styles.iconWrapper}`}>
                                {/* <FontAwesomeIcon className='fa-3x' icon={faLinkedin} /> */}
                                {/* <svg src={mortarboard} alt="mortarboard-icon" /> */}
                                {/* <Mortarboard/> */}
                                <ReactSVG
                                    className={`${styles.iconStyles} d-flex align-items-center justify-content-center w-100`} src={mortarboard} />
                            </div>
                            <h3 className={`${styles.advertisersServiceSecH3}`}>Education</h3>
                            <p className={`${styles.advertisersServiceSecP}`}>
                                I hold a bachelor in Engineering from Cairo University,
                                where I developed a strong foundation in both theoretical and practical aspects of the field.
                                My academic journey has been complemented by coursework in programming,
                                enhancing my multidisciplinary expertise.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.advertisersServiceSecCol} col-lg-4 `}>
                        <div className={`${styles.serviceCard} text-white`}>
                            <div className={`${styles.iconWrapper}`}>
                                {/* <FontAwesomeIcon className='fa-3x' icon={faLinkedin} /> */}
                                {/* <svg src={mortarboard} alt="mortarboard-icon" /> */}
                                {/* <Mortarboard/> */}
                                <ReactSVG
                                    className={`${styles.iconStyles} d-flex align-items-center justify-content-center w-100`} src={caseBag} />
                            </div>
                            <h3 className={`${styles.advertisersServiceSecH3}`}>Experience</h3>
                            <p className={`${styles.advertisersServiceSecP}`}>
                                For over two years, I have been working as a freelancer, specializing in programming.
                                I've undertaken sophisticated and unique projects, delivering customized software solutions for diverse clients.
                                My freelance journey highlights my ability to independently manage complex tasks and innovate to meet specific project requirements.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.advertisersServiceSecCol} col-lg-4 `}>
                        <div className={`${styles.serviceCard} text-white`}>
                            <div className={`${styles.iconWrapper}`}>
                                {/* <FontAwesomeIcon className='fa-3x' icon={faLinkedin} /> */}
                                {/* <svg src={mortarboard} alt="mortarboard-icon" /> */}
                                {/* <Mortarboard/> */}
                                <ReactSVG
                                    className={`${styles.iconStyles} d-flex align-items-center justify-content-center w-100`} src={rowing} />
                            </div>
                            <h3 className={`${styles.advertisersServiceSecH3}`}>Rowing</h3>
                            <p className={`${styles.advertisersServiceSecP}`}>
                                I have been passionately involved in rowing,
                                participating in both national and international competitions.
                                My dedication and hard work have led to outstanding results.
                                This experience has taught me discipline, resilience,
                                and the importance of perseverance,
                                qualities I bring to all aspects of my life and work.
                            </p>
                        </div>
                    </div>
                    <div className={`col-12 w-100 d-flex justify-content-center align-items-center`}>
                        {/* <a href={CV}
                            onClick={() => trackEvent("Button Click", "Click", "DownloadCV")}
                            download className={`${styles.button} text-decoration-none text-dark`}>Download CV</a> */}
                        {/* <a href={`https://app.flowcv.com/api/public/download_resume?token=6npo3va834`}
                            // onClick={() => trackEvent("Button Click", "Click", "DownloadCV")}
                            download className={`${styles.button} text-decoration-none text-dark`}>Download CV</a> */}
                        <button onClick={downloadFile} className={`${styles.button} text-decoration-none text-dark`}>
                            Download CV
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
})
export default About