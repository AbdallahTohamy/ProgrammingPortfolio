import React, { forwardRef } from 'react';
import Slider from 'react-slick'; // React Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactSVG } from 'react-svg';
import styles from './Testimonials.module.css';
import testimonialsData from './testimonialsData';
import mortarboard from './mortarboard.svg'; // Update with the correct path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = forwardRef(function Testimonials({ ...props }, ref) {

    // Slick Carousel Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Number of cards per view
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        pauseOnHover: false, // Prevent pausing on hover
    };
    console.log(testimonialsData);

    return (
        <>
            <div id='testimonials-section' className="divider"></div>
            <div ref={ref} {...props} className={`d-flex justify-content-center align-items-top mt-5 w-100 ${styles.mainContainer}`}>
                {/* <div className="col-12 my-5 w-100">
                    <div className="w-100 text-white">
                        <h1 className={`${styles.title} position-relative`}>Testimonials</h1>
                    </div>
                </div> */}
                {/* Carousel */}
                <Slider {...settings} className={`${styles.carouselContainer} w-100`}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="d-flex justify-content-center">
                            <div className={`${styles.advertisersServiceSecCol} col-lg-4`}>
                                <div className={`${styles.serviceCard} text-white`}>
                                    <div className={`${styles.iconWrapper}`}>
                                        {/* <ReactSVG
                                            className={`${styles.iconStyles} d-flex align-items-center justify-content-center w-100`}
                                            src={mortarboard}
                                        /> */}
                                        <FontAwesomeIcon
                                            icon={faQuoteLeft}
                                            className={`${styles.iconStyles} d-flex align-items-center justify-content-center w-100`}
                                        />
                                        {/* <img src='https://webytoh.onrender.com/wp-content/uploads/2023/02/Avatar-150x150.png'/> */}
                                    </div>
                                    <h3 className={`${styles.advertisersServiceSecH3}`}>{testimonial.name}</h3>
                                    <p className={`${styles.advertisersServiceSecP}`}>{testimonial.feedback}</p>
                                    <small>{testimonial.country}</small>
                                    <div className="mt-2">
                                        <small className="text-warning font-weight-bolder">Rating: {testimonial.rating} ⭐</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
});

export default Testimonials;
