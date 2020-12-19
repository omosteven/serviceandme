import React from "react";

import "../styles/homeFooter.css";

import {Helmet} from "react-helmet";

const HomeFooter = () => {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Helmet>
            <footer className="footer">
                <div className="social__footer">
                    <h6 className="subTitle">Subscribe to our newsletter.</h6>
                    <input type="email" placeholder="Enter email" className="emailSub"/><button className="subBtn">Subscribe</button>
                </div>
                <div className="copy__right__cont">
                    <p className="copy__footer">© 2020 ServiceandMe. All rights reserved</p>
                </div>
            </footer>
        </>
    );
};

export default HomeFooter;
