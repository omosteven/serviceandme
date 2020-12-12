import React from "react";

import {Link} from "react-router-dom";

import "../styles/homeBody.css";

import "bootstrap/dist/css/bootstrap.min.css";

import {Helmet} from "react-helmet";

import {Chrono} from 'react-chrono';

// import {Ripple} from "react-preloaders";

import mobileFirstImage from "../images/Startup_SVG-a7c5e6d7.svg";

import mobileSecondImage from "../images/intellectual-b138e111.svg";

const HomeBody = () => {
    const data = [
        {
            title: 'Step 0 - As a Customer or Business.',
            contentText: 'DOWNLOAD APP.',
            contentDetailedText: 'Get the APP installed from PlayStore or AppStore.'
        },
        {
            title: 'Step 1 - As a Business',

            contentText: 'SET UP ACCOUNT',
            contentDetailedText: 'Create an account and set up your profile'
        },
        {
            title: 'Step 1 - As a Customer.',

            contentText: 'SET UP ACCOUNT.',
            contentDetailedText: 'Create an account and set up your profile.'
        },
        {
            title: 'Step 3',
            contentText: 'SET UP PROFILE',
            contentDetailedText: 'Create a personal profile and add neccessary info about you'
        }, {
            title: 'Step 2 - As a Customer.',
            contentText: 'SEARCH FOR SERVICE.',
            contentDetailedText: 'Search for any service and read about the description of which is of your interest.'
        }, {
            title: 'Step 2',
            contentText: 'SEARCH FOR SERVICE',
            contentDetailedText: ''
        }, {
            title: 'Step 3 - As a Customer.',
            contentText: 'MAKE REQUEST.',
            contentDetailedText: 'Make a request with just a click and get redirected to chat up the service provider.'
        }, {
            title: 'Step 2',
            contentText: 'SEARCH FOR SERVICE',
            contentDetailedText: ''
        }, {
            title: 'Step 4 - As a Customer.',
            contentText: 'PAY & WAIT FOR DELIVERY.',
            contentDetailedText: 'Make your payment and rate service after delivery.'
        }, {
            title: 'Step 4 - As a Business.',
            contentText: 'PAY & WAIT FOR DELIVERY.',
            contentDetailedText: 'Make your payment and rate service after delivery.'
        }, {
            title: 'Step 4 - As a Customer.',
            contentText: 'ADD SERVICE AS FAVORITE.',
            contentDetailedText: 'Add service provider as favourite for ease of subsequent clicks.'
        },
    ];
    return (
        <>
            <div>
                <Helmet htmlAttributes>
                    <html lang="en"/>
                    <title>ServiceandMe</title>
                    <meta name="description" content="ServiceandMe - Connecting customers with on-demand services around them anywhere anytime."/>
                    <meta name="image" content=""/>
                    <link rel="icon" href=""/>

                    <link rel="apple-touch-icon" href=""/>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous"/>
                </Helmet>

                <div>

                    <section className="bodyContainer">
                        <div className="first__layer">
                            <div className="left__side">
                                <div className="left__side__container">
                                    <p className="perfect__place animate--perfect">
                                        Welcome to
                                        <span class="ServiceandMe">ServiceandMe</span>
                                    </p>
                                    <p className="perfect__place animate--perfect">
                                        {/* ServiceandMe */} </p>
                                    <h4 className="service__describe_page">
                                        An online platform that allows you as a service
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                provider to render your services (on-demand) to people around
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                you OR connect with Nearby service providers as customer.
                                    </h4>

                                    <div className="left__side__button__container">
                                        <Link to="/auth/register/" className="left__side__button">
                                            <i class="fas fa-apple-alt"></i>
                                            App Store
                                        </Link>
                                    </div>
                                    <div className="left__side__button__container">
                                        <Link to="/auth/register/" className="left__side__button2">
                                            <i class="fab fa-google-play"></i>
                                            Play Store
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="right__side">
                                <div className="right__side__container">
                                    <div className="leftSideImage"></div>
                                    <div className="rightSideImage"></div>
                                </div>
                            </div>
                        </div>
                        <div className="first__layer__mobile">
                            <img src={mobileFirstImage}
                                alt=""/>
                        </div>
                        <div className="curve__shape">
                            <div class="section_wave1"></div>
                        </div>
                    </section>

                    {/* Start of the Second Layer */}

                    <section className="__layer" data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        {/* <hr className="layer__rule" /> */}
                        <div className="second__layer__container">
                            <h4 className="second__layer__title">About Us</h4>
                            {/* <h6 className="second__layer__title2">
                                Start working with Landrick that can provide everything you need
                                to generate awareness, drive traffic, connect.
                                </h6> */}
                            <div className="second__layer__description">
                                <img src={mobileSecondImage}
                                    alt=""
                                    className="second__layer__desc__img"/>
                                <div className="second__layer__desc">
                                    <h5 className="second__layer__desc__head">
                                        Change your business with ServiceandMe
                                    </h5>

                                    <li className="second__layer__desc__inner">
                                        ServiceandMe is a platform that connects customers with on-demand
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                businesses around them. On demand businesses are businesses
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                which deliver their product at your door from anywhere and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                anytime
                                    </li>
                                    <li className="second__layer__desc__inner">
                                        ServiceandMe allows users to render their services as service
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                provider to people around them and connect with those services
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                providers as customers.
                                    </li>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Third layer */}
                    <section className="__layer" data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        {/* <hr className="layer__rule" /> */}
                        <div className="__layer__container">
                            <h4 className="second__layer__title">How It Works</h4>
                            {/* <h6 className="second__layer__title2">
                                Start working with Landrick that can provide everything you need
                                to generate awareness, drive traffic, connect.
                                </h6> */}
                            <div className="fourth__layer__description">
                                <Chrono items={data}
                                    mode="VERTICAL_ALTERNATING"
                                    hideControls
                                    theme={
                                        {
                                            primary: 'rgb(0, 68, 102)',
                                            secondary: 'white'
                                        }
                                    }/>
                            </div>
                        </div>
                    </section>

                    <section className="__layer" data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        {/* <hr className="layer__rule" /> */}
                        <div className="__layer__container">
                            <h4 className="second__layer__title">Feedback</h4>
                            <h6 className="second__layer__title2">
                                Got a feedback for us or interested to reach out to us?
                            </h6>
                            <div className="fourth__layer__description">
                                <div className="fourth__layer__card__container">
                                    <div className="fourth__layer__left__card"></div>
                                    <div className="fourth__layer__right__card">
                                        <div className="contact__input__card">
                                            <div className="contact__input__box">
                                                <input type="text" placeholder=" Subject" className="contact__input"/>
                                            </div>
                                            <div className="contact__input__box">
                                                <input type="email" placeholder=" Your Email" className="contact__input"/>
                                            </div>
                                            <div className="contact__input__box">
                                                <textarea type="text" placeholder=" Message" className="contact__input contact--text--area"></textarea>
                                            </div>

                                            <div className="contact__button__box">
                                                <button className="contact__button">SEND</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* <Ripple color={"rgb(0, 68, 102)"}
                background="white"
                time={3000}
                customLoading={false}/> */} </>
    );
};

export default HomeBody;
