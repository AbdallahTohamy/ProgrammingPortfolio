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
import "devicon/devicon.min.css"; // Ensure Devicon is installed

const About = forwardRef(function About({ ...props }, ref) {
    // List of skills
    // const skills = [
    //     "Website development", "MySQL", "Sequelize framework", "React", "SQL", "AWS", "Next.js",
    //     "Servers deployment and maintenance", "Python", "Batch", "Microsoft office tools", "Azure",
    //     "DevOps", "Data analytics", "FFmpeg", "Videos and images encoding", "Node.js", "WebGL",
    //     "AI Tool Proficient", "C/C++/C#", "Socket.io", "Real-Time applications", "JavaScript",
    //     "Problem Solving", "GCP", "TypeScript", "Cloud-Native Applications", "Automated Software Testing",
    //     "User Interface Design", "Server Side Programming", "Redux.js", "npm", "Programming", "GitHub",
    //     "REST APIs", "Git", "Startups", "Engineering", "Software Engineers", "Software as a Service (SaaS)",
    //     "API Development", "Systems Design", "Server Side", "Relational Databases", "Web Applications",
    //     "IT Integration", "Troubleshooting", "JSON", "System Integration", "Computer Science",
    //     "Technical Requirements", "Kubernetes", "Operating Systems", "Databases", "CI/CD", "SASS",
    //     "Linux", "Bootstrap (Framework)", "Tailwind CSS", "CSS", "HTML", "Next.js", "Communication",
    //     "Creativity and Innovation", "Teamwork", "Powershell", "Problem Solving", "DevOps",
    //     "Back-End Web Development", "Front-End Development", "JavaScript", "DigitalOcean", "Sequelize.js",
    //     "MongoDB", "MySQL", "SQL", "Socket.io", "Google Cloud Platform (GCP)", "Microsoft Azure",
    //     "Amazon Web Services (AWS)", "WebGL", "Python", "FFmpeg", "Node.js", "Web Development",
    //     "React.js", "Full-Stack Development", "Software Development", "MERN Stack", "Project Management"
    // ];
    // const skillsCategories = {
    //     "Frontend Development": [
    //         "React.js", "Next.js", "Redux.js", "JavaScript", "TypeScript",
    //         "HTML", "CSS", "SASS", "Bootstrap", "Tailwind CSS"
    //     ],
    //     "Backend Development": [
    //         "Node.js", "Express.js", "Socket.io", "REST APIs", "Sequelize.js",
    //         "MongoDB", "MySQL", "SQL", "Relational Databases"
    //     ],
    //     "DevOps & Cloud": [
    //         "AWS", "Google Cloud Platform (GCP)", "Microsoft Azure", "Kubernetes",
    //         "CI/CD", "DigitalOcean", "Servers Deployment and Maintenance", "IT Integration"
    //     ],
    //     "Media & Encoding": [
    //         "FFmpeg", "Videos and Images Encoding", "WebGL"
    //     ],
    //     "Software Engineering": [
    //         "Software Development", "MERN Stack", "Full-Stack Development",
    //         "Automated Software Testing", "Systems Design", "System Integration",
    //         "Server-Side Programming", "Problem Solving"
    //     ],
    //     "Programming Languages": [
    //         "Python", "C/C++/C#", "Batch", "PowerShell"
    //     ],
    //     "Version Control & Collaboration": [
    //         "Git", "GitHub", "npm", "Project Management", "Startups"
    //     ],
    //     "Other Skills": [
    //         "Data Analytics", "Technical Requirements", "Operating Systems",
    //         "Troubleshooting", "Communication", "Creativity and Innovation", "Teamwork"
    //     ]
    // };
    const skillsCategories = {
        "Frontend Development": [
            { name: "React.js", icon: "devicon-react-original" },
            { name: "Next.js", icon: "devicon-nextjs-plain" },
            { name: "Redux.js", icon: "devicon-redux-original" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "TypeScript", icon: "devicon-typescript-plain" },
            { name: "HTML", icon: "devicon-html5-plain" },
            { name: "CSS", icon: "devicon-css3-plain" },
            { name: "SASS", icon: "devicon-sass-original" },
            { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
            { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" }
        ],
        "Backend Development": [
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "Express.js", icon: "devicon-express-original" },
            { name: "Socket.io", icon: "devicon-socketio-original" },
            { name: "REST APIs", icon: "devicon-api-original" },
            { name: "Sequelize.js", icon: "devicon-sequelize-plain" },
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "SQL", icon: "devicon-postgresql-plain" },
            { name: "Relational Databases", icon: "devicon-cosmosdb-plain" }
        ],
        "DevOps & Cloud": [
            { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
            { name: "Google Cloud Platform (GCP)", icon: "devicon-googlecloud-plain" },
            { name: "Microsoft Azure", icon: "devicon-azure-plain" },
            { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
            { name: "CI/CD", icon: "devicon-githubactions-plain" },
            { name: "DigitalOcean", icon: "devicon-digitalocean-plain" },
            { name: "Servers Deployment and Maintenance", icon: "devicon-linux-plain" },
            { name: "IT Integration", icon: "devicon-devicon-plain" }
        ],
        "Media & Encoding": [
            { name: "FFmpeg" },
            // { name: "Videos and Images Encoding", icon: "devicon-imagej-plain" },
            { name: "Three.js", icon: "devicon-threejs-original" },
            { name: "WebGL", icon: "devicon-opengl-plain" }
        ],
        "Software Engineering": [
            { name: "Software Development", icon: "devicon-devicon-plain" },
            { name: "MERN Stack", icon: "devicon-mongodb-plain" },
            { name: "Full-Stack Development", icon: "devicon-devicon-plain" },
            { name: "Automated Software Testing", icon: "devicon-testcafe-plain" },
            { name: "Systems Design", icon: "devicon-devicon-plain" },
            { name: "System Integration", icon: "devicon-devicon-plain" },
            { name: "Server-Side Programming", icon: "devicon-nodejs-plain" },
            { name: "Problem Solving", icon: "devicon-devicon-plain" }
        ],
        "Programming Languages": [
            { name: "Python", icon: "devicon-python-plain" },
            { name: "C/C++/C#", icon: "devicon-cplusplus-plain" },
            { name: "Batch", icon: "devicon-windows8-original" },
            { name: "PowerShell", icon: "devicon-windows8-original" }
        ],
        "Version Control & Collaboration": [
            { name: "Git", icon: "devicon-git-plain" },
            { name: "GitHub", icon: "devicon-github-original" },
            { name: "npm", icon: "devicon-npm-original-wordmark" },
            { name: "Project Management", icon: "devicon-trello-plain" },
            { name: "Startups", icon: "devicon-devicon-plain" }
        ],
        // "Other Skills": [
        //     { name: "Data Analytics", icon: "devicon-r-original" },
        //     { name: "Technical Requirements", icon: "devicon-devicon-plain" },
        //     { name: "Operating Systems", icon: "devicon-linux-plain" },
        //     { name: "Troubleshooting", icon: "devicon-devicon-plain" },
        //     { name: "Communication", icon: "devicon-devicon-plain" },
        //     { name: "Creativity and Innovation", icon: "devicon-devicon-plain" },
        //     { name: "Teamwork", icon: "devicon-devicon-plain" }
        // ]
    };

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
                    <div className="col-12 my-5 d-flex flex-column align-items-center">
                        {/* Section Title */}
                        <div className="text-center mb-4">
                            <h1 className={`${styles.title} position-relative`}>
                                Skills
                            </h1>
                        </div>

                        {/* Skills Container */}
                        <div className="w-75">
                            {Object.entries(skillsCategories).map(([category, skills]) => (
                                <div key={category} className="mb-5 ">
                                    {/* Category Title */}
                                    <h2 className={`${styles.colorTheme}`}>
                                        {category}
                                    </h2>

                                    {/* Skills Grid */}
                                    <div className=" row justify-center">
                                        {skills.map((skill, index) => (
                                            <div
                                                key={index}
                                                className="d-flex col-4 col-md-3 col-xl-2 align-items-center justify-content-center flex-column rounded-xl shadow-lg p-4 m-4 w-32"
                                            >
                                                {/* Icon */}
                                                {skill.icon ? (
                                                    <i style={{
                                                        fontSize: "30px"
                                                    }} className={`${skill.icon} ${styles.colorTheme}`}></i>
                                                ) : (
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/FFmpeg_icon.svg" alt={skill.name} />
                                                )}


                                                {/* Skill Name */}
                                                <span className={`${styles.colorTheme} mt-2 px-4 py-1 bg-gray-900 text-gold-400 font-bold text-lg `}>
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>




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