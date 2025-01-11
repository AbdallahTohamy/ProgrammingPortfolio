import React, { useState, forwardRef } from 'react';
import logo from '../../logo.svg';
// import mortarboard from './mortarboard.svg'
// import caseBag from './case.svg'
// import rowing from './rowing.svg'
import styles from './project.module.css';
import { ReactSVG } from 'react-svg';
import overview from './spaceTruss/overview.PNG'
import Sap2000 from './spaceTruss/sap2000export.PNG'
import analyzer from './spaceTruss/analyzer.PNG'
import Trial1 from './spaceTruss/out2.png'
import Trial2 from './spaceTruss/out.png'
// import GPVideo from './GP/GP.mp4'
import laptop from './videoeditor/laptop.svg'
import projectData from './projectData';
// import info from './about.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { facebook } from '@fortawesome/free-solid-svg-icons'
// import { facebook } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faLinkedin, faSquareUpwork, faFonticons } from '@fortawesome/free-brands-svg-icons'
import { initGA, trackEvent } from "../../analytics";

const Projects = forwardRef(function Projects({ ...props }, ref) {
    return (
        <>
            {/* <div style={{ height: '100vh' }} className={`${styles.homeImage} d-flex justify-content-center align-items-center w-100 position-absolute`}>

            </div> */}
            <div id='projects-section' className="divider"></div>
            <div ref={ref} {...props} className={`d-flex justify-content-center align-items-top mt-5 w-100 ${styles.mainContainer}`}>
                <div className='row w-100'>
                    <div className="col-12 my-5 w-100">
                        <div className={` w-100 text-white`}>
                            <h1 className={`${styles.title} position-relative`}>
                                Projects
                            </h1>
                        </div>
                    </div>
                    {
                        projectData.map((item, index) => (
                            <div className={`${styles.advertisersServiceSecCol} col-lg-12 `}>
                                <div className={`${styles.serviceCard} text-white`}>
                                    <div className={`${styles.iconWrapper}`}>
                                        {/* <FontAwesomeIcon className='fa-3x' icon={faLinkedin} /> */}
                                        {/* <svg src={mortarboard} alt="mortarboard-icon" /> */}
                                        {/* <Mortarboard/> */}
                                        {/* <ReactSVG
                                            className={`${styles.iconStyles} d-flex align-items-center justify-content-center w-100`} src={mortarboard} /> */}
                                        <img src={item.imagePath} className='w-100' />
                                    </div>
                                    <h3 className={`${styles.advertisersServiceSecH3}`}>{item.title}</h3>
                                    <p className={`${styles.advertisersServiceSecP}`}>
                                        {item.description}
                                    </p>
                                    <div className={`col-12 w-100 d-flex justify-content-center align-items-center mt-3`}>
                                        <a href={item.URL} target='_blank' onClick={() => trackEvent("Button Click", "Click", item.title)}
                                            download className={`${styles.button} text-decoration-none text-dark`}>Visit</a>
                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                    <div className={`${styles.advertisersServiceSecCol} col-lg-12 `}>
                        <div className={`${styles.serviceCard} text-white`}>
                            <div className={`${styles.iconWrapper}`}>
                                {/* <FontAwesomeIcon className='fa-3x' icon={faLinkedin} /> */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <img style={{ width: '320px' }} src={overview} alt="mortarboard-icon" />
                                    </div>
                                    {/* <div className="col-lg-6">
                                    <img style={{width:'320px'}} src={analyzer} alt="mortarboard-icon" />
                                    </div> */}
                                </div>
                                {/* <Mortarboard/> */}
                            </div>
                            <h3 className={`${styles.advertisersServiceSecH3}`}>Space Truss Calculator</h3>
                            <p className={`${styles.advertisersServiceSecP} px-lg-5`}>
                                I developed a powerful software tool capable of solving any indeterminate space truss.
                                This innovative solution integrates advanced algorithms and engineering principles,
                                providing precise and efficient analysis for complex structural systems.
                                It reflects my expertise in both programming and engineering, delivering a unique contribution to the field.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <div className="row">
                                            <div className="col-6">
                                                <img className='w-100 h-100' src={analyzer} alt="mortarboard-icon" />
                                            </div>
                                            <div className="col-6">
                                                <img className='w-100' src={Sap2000} alt="mortarboard-icon" />
                                            </div>
                                        </div>

                                        <h3 className={`${styles.advertisersServiceSecH3}`}>SAP2000 Integration</h3>
                                        <p className={`${styles.advertisersServiceSecP} px-lg-5`}>
                                            I enhanced my software with a feature to export models,
                                            enabling seamless integration with SAP2000.
                                            This functionality allows users to effortlessly import complex truss models into SAP2000 for further analysis and optimization,
                                            ensuring a smooth transition from software to industry-standard tools.
                                        </p>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <div className="row">
                                            <div className="col-6">
                                                <img className='w-100 h-100' src={Trial1} alt="mortarboard-icon" />
                                            </div>
                                            <div className="col-6">
                                                <img className='w-100' src={Trial2} alt="mortarboard-icon" />
                                            </div>
                                        </div>

                                        <h3 className={`${styles.advertisersServiceSecH3}`}>Example</h3>
                                        <div className={`col-12 w-100 d-flex justify-content-center align-items-center mt-3`}>
                                            <a href="https://space-truss-analyzer.onrender.com/" target='_blank' download className={`${styles.button} text-decoration-none text-dark`}>Explore more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className={`${styles.advertisersServiceSecCol} col-lg-6 `}>
                        <div style={{ height: '530px' }} className={`${styles.serviceCard} text-white`}>
                            <div className={`${styles.iconWrapper}`}>
                               
                                <video className='w-100' src={GPVideo} controls></video>
                            </div>
                            <h3 className={`${styles.advertisersServiceSecH3}`}>Graduation Project</h3>
                            <p className={`${styles.advertisersServiceSecP} px-lg-5`}>
                                For my Graduation Project, I designed, modeled, and detailed a semi-complex industrial portal frame factory.
                                Utilizing advanced modeling, design, and drawing tools,
                                I delivered a comprehensive solution that demonstrated my capabilities in handling structural challenges from concept to detailed execution.
                            </p>
                        </div>
                    </div> */}
                    <div className={`${styles.advertisersServiceSecCol} col-lg-12 `}>
                        <div style={{ height: '530px' }} className={`${styles.serviceCard} text-white`}>
                            <div className={`${styles.iconWrapper}`}>
                                {/* <FontAwesomeIcon className='fa-3x' icon={faLinkedin} /> */}
                                <ReactSVG
                                    className={`${styles.iconStyles} d-flex align-items-center justify-content-center w-100`} src={laptop} />

                                {/* <Mortarboard/> */}
                                {/* <img className='w-100' src={laptop} alt="laptop-image" /> */}
                            </div>
                            <h3 className={`${styles.advertisersServiceSecH3}`}>Programming Projects</h3>
                            <p className={`${styles.advertisersServiceSecP} px-lg-5`}>
                                I have successfully completed over 30 projects, delivering complex and unique programming solutions alongside advanced video editing and encoding capabilities.
                                This diverse experience reflects my ability to tackle challenging tasks and create innovative solutions across various domains.
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