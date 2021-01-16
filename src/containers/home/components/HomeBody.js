import React from "react";

// import {Ripple} from "react-preloaders";

import {Link} from "react-router-dom";

import "../styles/homeBody.css";

import {Helmet} from "react-helmet";

import {Chrono} from 'react-chrono';

import AOS from "aos";

import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";

import mobileFirstImage from "../images/Startup_SVG-a7c5e6d7.svg";

import mobileSecondImage from "../images/intellectual-b138e111.svg";

const HomeBody = () => {
    AOS.init();

    const data = [
        {
            title: 'Step 1 - As a Service provider.',
            contentText: 'DOWNLOAD APP.',
            contentDetailedText: 'Get the APP installed from PlayStore or AppStore and set up a service provider account.'
        },
        {
            title: 'Step 1 - As a Customer.',
            contentText: 'DOWNLOAD APP.',
            contentDetailedText: 'Get the APP installed from PlayStore or AppStore and set up a customer account.'
        },
        {
            title: 'Step 2 - As a Service provider.',

            contentText: 'CHECK YOUR TIMELINE.',
            contentDetailedText: 'Check your timeline to see customers around you that requested for a specific service. You will always receive notifications for new requests.'
        },
        {
            title: 'Step 2 - As a Customer.',
            contentText: 'SEARCH FOR A SERVICE.',
            contentDetailedText: 'Search for any service and check ratings/reviews of interested service provider in the search results.'
        }, {
            title: 'Step 3 - As a Service provider.',
            contentText: 'CHAT CUSTOMERS.',
            contentDetailedText: 'Chat up customers that request for your service.'
        }, {
            title: 'Step 3 - As a Customer.',
            contentText: 'MAKE A REQUEST.',
            contentDetailedText: 'Make a request for a service with just a click and interested providers of such service will message you.'
        }, {
            title: 'Step 4 - As a Service provider.',
            contentText: 'DELIVER & GET PAID.',
            contentDetailedText: 'Deliver your service to your customer as agreed.'
        }, {
            title: 'Step 4 - As a Customer.',
            contentText: 'PAY & WAIT FOR DELIVERY.',
            contentDetailedText: 'Make your payment and rate service after delivery.'
        }, {
            title: 'Step 5 - As a Service provider.',
            contentText: 'POST UPDATES/NEWS.',
            contentDetailedText: 'Post your News & recent updates to your customers (those that favorite you) Timeline.'
        }, {
            title: 'Step 5 - As a Customer.',
            contentText: 'ADD SERVICE AS FAVORITE.',
            contentDetailedText: 'Add service provider as favourite for ease of subsequent clicks.'
        },
    ];

    return (
        <> {/* <Ripple color={"rgb(0, 68, 72)"}
                background="white"
                time={3000}
                customLoading={false}/> */}
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

                <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine">

                    <section className="bodyContainer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        <div className="first__layer">
                            <div className="left__side">
                                <div className="left__side__container">
                                    <h2 className="perfect__place animate--perfect">
                                        Welcome to {/* <span className="ServiceandMe">ServiceandMe</span> */} </h2>
                                    <h2 className="perfect__place animate--perfect">
                                        ServiceandMe
                                    </h2>
                                    <h4 className="service__describe_page">
                                        Serviceandme is a mobile application which connects independent contractors with people who need one-time services.
                                    </h4>

                                    <div className="left__side__button__container">
                                        <Link to="/auth/register/" className="left__side__button">
                                            <i className="fas fa-apple-alt"></i>
                                            App Store
                                        </Link>
                                    </div>
                                    <div className="left__side__button__container">
                                        <Link to="/auth/register/" className="left__side__button2">
                                            <i className="fab fa-google-play"></i>
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
                            <div className="section_wave1"></div>
                        </div>
                    </section>

                    {/* Start of the Second Layer */}

                    <section className="__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
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
                                        RENDER and EARN
                                    </h5>

                                    <li className="second__layer__desc__inner">
                                        ServiceandMe is an application that connects you with on-demand service provider to get your work done.
                                    </li>
                                    <li className="second__layer__desc__inner">It offers users the convenience to find/request for different categories of services on their mobile devices and also allow service providers to turn their smartphones to business office where they can render their services and get paid.</li>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*  */}
                    <section className="__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        {/* <hr className="layer__rule" /> */}
                        <div className="__layer__container cardContWidth">
                            <h4 className="second__layer__title">Why ServiceandMe?</h4>
                            <h5 className="why__subititle">Are you a Customer or Service provider?</h5>
                            <div className="container">
                                <div className="row mt-3">
                                    <div className="col-sm-12 col-lg-6 col-xl-6 col-md-6 cardCont">
                                        <h6 className="whyCardTitle">As a Service provider</h6>
                                        <div className="why--card">
                                            <h6 className="whyItem">
                                                <i className="fa fa-money whyIcon" aria-hidden="true"></i>
                                                Make Money When Delivering Services.</h6>
                                        </div>
                                        {/* <div className="why--card">
                                            <h6 className="whyItem">
                                                <i className="fa fa-save whyIcon" aria-hidden="true"></i>
                                                Save Money From Developing A Dedicated Website For Your Business.</h6>
                                        </div> */}
                                        <div className="why--card">
                                            <h6 className="whyItem">
                                                <i className="fa fa-expand whyIcon" aria-hidden="true"></i>
                                                Gain more customers, engage/retain existing customers, and get sales analytics</h6>
                                        </div>
                                        <div className="why--card">
                                            <h6 className="whyItem">
                                                <i className="fa fa-credit-card whyIcon" aria-hidden="true"></i>
                                                Accept payment directly from your customer on the app.</h6>
                                        </div>
                                         {/* <div className="why--card">
                                            <h6 className="whyItem">
                                                <i className="fa fa-line-chart whyIcon" aria-hidden="true"></i>
                                               Get sales analytics and make schedules.</h6>
                                        </div> */}
                                    </div>
                                    <div className="col-sm-12 col-lg-6 col-xl-6 col-md-6 cardCont">
                                        <h6 className="whyCardTitle">As a Customer.</h6>
                                        <div className="why--card">
                                            <h6 className="whyItem">
                                                <i className="fa fa-save whyIcon" aria-hidden="true"></i>
                                                Save stress; Find/Request for a service with a click.</h6>
                                        </div>
                                        {/* <div className="why--card">
                                            <h6 className="whyItem">
                                                <i className="fa fa-link whyIcon" aria-hidden="true"></i>
                                                Stay connected; you can receive News/trends/promo from your favorite service providers.</h6>
                                        </div> */}
                                        <div className="why--card">
                                            <h6 className="whyItem">
                                                <i className="fa fa-credit-card whyIcon" aria-hidden="true"></i>
                                                Pay on the go; you can pay for service delivered on the app using your bank card.</h6>
                                        </div>
                                        <div className="why--card">
                                            <h6 className="whyItem">
                                                <i className="fas fa-greater-than whyIcon" aria-hidden="true"></i>
                                               Compare prices across different service providers.
                                               </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Third layer */}
                    <section className="__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        <div className="__layer__container">
                            <h4 className="second__layer__title">How It Works</h4>
                           
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

                    <section className="__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
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
        </>
    );
};

export default HomeBody;
