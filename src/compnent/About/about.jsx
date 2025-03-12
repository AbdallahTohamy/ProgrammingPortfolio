import React, { forwardRef } from 'react';
import logo from '../../logo.svg';
import mortarboard from './mortarboard.svg';
import caseBag from './case.svg';
import rowing from './rowing.svg';
import styles from './about.module.css';
import { ReactSVG } from 'react-svg';
import CV from './Abdallah-ElTohamy.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faSquareUpwork, faFonticons } from '@fortawesome/free-brands-svg-icons';
import { initGA, trackEvent } from "../../analytics";

const About = forwardRef(function About({ ...props }, ref) {
    // List of skills
    const skills = [
        "Website development", "MySQL", "Sequelize framework", "React", "SQL", "AWS", "Next.js",
        "Servers deployment and maintenance", "Python", "Batch", "Microsoft office tools", "Azure",
        "DevOps", "Data analytics", "FFmpeg", "Videos and images encoding", "Node.js", "WebGL",
        "AI Tool Proficient", "C/C++/C#", "Socket.io", "Real-Time applications", "JavaScript",
        "Problem Solving", "GCP", "TypeScript", "Cloud-Native Applications", "Automated Software Testing",
        "User Interface Design", "Server Side Programming", "Redux.js", "npm", "Programming", "GitHub",
        "REST APIs", "Git", "Startups", "Engineering", "Software Engineers", "Software as a Service (SaaS)",
        "API Development", "Systems Design", "Server Side", "Relational Databases", "Web Applications",
        "IT Integration", "Troubleshooting", "JSON", "System Integration", "Computer Science",
        "Technical Requirements", "Kubernetes", "Operating Systems", "Databases", "CI/CD", "SASS",
        "Linux", "Bootstrap (Framework)", "Tailwind CSS", "CSS", "HTML", "Next.js", "Communication",
        "Creativity and Innovation", "Teamwork", "Powershell", "Problem Solving", "DevOps",
        "Back-End Web Development", "Front-End Development", "JavaScript", "DigitalOcean", "Sequelize.js",
        "MongoDB", "MySQL", "SQL", "Socket.io", "Google Cloud Platform (GCP)", "Microsoft Azure",
        "Amazon Web Services (AWS)", "WebGL", "Python", "FFmpeg", "Node.js", "Web Development",
        "React.js", "Full-Stack Development", "Software Development", "MERN Stack", "Project Management"
    ];

    return (
        <>
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

                    {/* Skills Section */}
                    {/* <div className="col-12 my-5 d-flex flex-column align-items-center">
                        <div className="text-white mb-4 text-center">
                            <h1 className={`${styles.title} position-relative`}>Skills</h1>
                        </div>

                        <div className="d-flex flex-wrap justify-content-center gap-3 w-75">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold shadow-md transition-transform transform hover:scale-105"
                                    style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div> */}


                    <div className={`col-12 w-100 d-flex justify-content-center align-items-center`}>
                        <a href={CV}
                            onClick={() => trackEvent("Button Click", "Click", "DownloadCV")}
                            download className={`${styles.button} text-decoration-none text-dark`}>Download CV</a>
                    </div>
                </div>
            </div>
        </>
    );
});

export default About;