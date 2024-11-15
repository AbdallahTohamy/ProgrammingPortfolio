import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import styles from './header.module.css';
export default function Header({ activeSection, ...props }) {
    const [activeLines, setActiveLines] = useState(false);
    const [activeRotate, setActiveRotate] = useState(false);
    const [activeEff, setActiveEff] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [pointerEvents, setPointerEvents] = useState('auto');
    const [collapse, setCollapse] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    const toggleLines = () => {
        // setPointerEvents('none');

        if (activeLines) {
            setTimeout(() => setActiveLines(false), 500);
            // setTimeout(() => , 400);
            setActiveRotate(false)
            setPointerEvents('none')
            setTimeout(() => setActiveEff(true), 1000);
            setTimeout(() => setPointerEvents('auto'), 500);
            setTimeout(() => setCollapse(true),500);
        } else {
            setTimeout(() => setActiveLines(true), 100);
            setTimeout(() => setActiveRotate(true), 400);
            setTimeout(() => setActiveEff(false), 200);
            setPointerEvents('none')
            setTimeout(() => setPointerEvents('auto'), 500);
            setCollapse(false)
        }
    };

    const handleCollapseHidden = () => {
        if (activeLines) {
            setPointerEvents('none');
            setTimeout(() => setActiveLines(false), 300);
            setTimeout(() => setPointerEvents('auto'), 1000);
        }
    };

    const handleCollapseShown = () => {
        if (activeLines) {
            setPointerEvents('none');
            setTimeout(() => setActiveLines(true), 100);
            setTimeout(() => setPointerEvents('auto'), 1000);
        }
    };



    return (
        <>
            <header>
                <nav className={`navbar ${styles.navTheme} text-white navbar-expand-lg navbar-light ${collapse?'':styles.activeNav} ${scrolled ? styles.activeNav : ''}`}>
                    <a className='text-decoration-none' href="/">
                        <h1 className={`ml-lg-5 ml-3 text-white `}><span style={{ color: "#ffd700" }} className={``}>A</span>bdallah</h1>
                        {/* <img className="navbar-brand" src="Images/Logo.png" alt="Logo" /> */}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleLines}

                    >
                        <div style={{ pointerEvents: pointerEvents }} className={`${styles.navLines}  ${activeLines ? styles.ActiveLines : ''} ${activeEff ? styles.LineEffect : ''} ${collapse?'':styles.navLinesActive} ${scrolled ? styles.navLinesActive : ''}`}>
                            <div style={{ pointerEvents: pointerEvents }} className={`${styles.WrapperLine} ${styles.Line1}`}></div>
                            <div style={{ pointerEvents: pointerEvents }} className={`${styles.WrapperLine} ${activeRotate ? styles.Rotate1 : ''} ${styles.Line2}`}>
                                <div className={`${styles.WrapperLine} ${activeRotate ? styles.Rotate2 : ''}  ${styles.Line4}`}></div>
                            </div>
                            <div style={{ pointerEvents: pointerEvents }} className={`${styles.WrapperLine} ${styles.Line3}`}></div>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className={`${styles.navItemEdits} nav-item `}>
                                <a className={`nav-link ${styles.mainlink} ${activeSection == 'Home' ? styles.active : ''}`} href="#Home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className={`${styles.navItemEdits} nav-item `}>
                                <a className={`nav-link ${styles.mainlink} ${activeSection == 'About' ? styles.active : ''}`} href="#about-section">About Us</a>
                            </li>
                            {/* <li className={`${styles.navItemEdits} nav-item ${activeSection == 'Projects' ? styles.active : ''}`}>
                                <a className={`nav-link ${styles.mainlink} `} href="Services.html" id="navbarDropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">
                                    Services
                                </a> */}

                                {/*
                                dropdown-toggle to the <a>
                                 <div className={`dropdown-menu p-2 ${styles.dropdownMenu}`} aria-labelledby="navbarDropdown">
                                    <a className={`dropdown-item nav-link ${styles.sublink}`} href="Services.html#investors-services">For Investors</a>
                                    <a className={`dropdown-item nav-link ${styles.sublink}`} href="Services.html#Portfolio-services">For Portfolio
                                        Companies/Entrepreneurs</a>
                                </div> */}
                            {/* </li> */}
                            <li className={`${styles.navItemEdits} nav-item`}>
                                <a className={`nav-link ${styles.mainlink} ${activeSection == 'Projects' ? styles.active : ''}`} href="#projects-section">Projects</a>
                            </li>
                            <li className={`${styles.navItemEdits} nav-item`}>
                                <a className={`nav-link ${styles.mainlink} ${activeSection == 'Contact' ? styles.active : ''}`} href="#contact-section">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    );
}
// sudo apt install php-intl php-curl php-mbstring php-gd php-exif php-json php-xml php-mysql
