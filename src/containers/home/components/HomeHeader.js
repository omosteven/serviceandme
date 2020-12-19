/* 

Date : 11th of Sept 2020

Naming Convention : Pascal for Constructors & Functions while Camel for other tokens

Description : This file is for the header of the home page

Files Attached To : /home/base/

File Type : React

Written By : Steven Omole-Adebomi

Follow me on

LinkedIn : https://linkedin.com/in/steven-omole

Github : https://github.com/omosteven

Twitter : @OmoleSteven

*/

import React, {useState} from "react";

import {Link} from "react-router-dom";

import {Helmet} from "react-helmet";

import "../styles/homeHeader.css";

import "../../../packages/css/demo.css";

import "../../../packages/css/component.css";

const HomeHeader = () => {
    const [nav__class, setNav__class] = useState(true);

    const [hd, setHd] = useState("hd");

    // const [hdLogin, setHdLogin] = useState("hd hd--login");

    const [logoColor, setLogoColor] = useState("logoColorUnScroll");

    // const [menuIcon__class, setMenuIcon__class] = useState("menu-icon-trigger");

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        if (document.documentElement.scrollTop > 88) {
            setNav__class("headerscroll");

            // setMenuIcon__class("menuIcon__change");

            setHd("hd1");

            // setHdLogin("hd1 hd--login");

            setLogoColor("logoColorOnScroll");
        } else {
            setNav__class("headerunscroll");

            // setMenuIcon__class("menu-icon-trigger");

            // setHdLogin("hd hd--login");

            setHd("hd");

            setLogoColor("logoColorUnScroll");
        }
    };

    const scrowDownPage = height => {
        window.scrollTo(0, height);
    }

    return (
        <>
            <div>
                <div className="headerbar">
                    <header className={nav__class}>
                        <div className="hd__col">
                            <div className="logo">
                                <span className="logo1">
                                    <img src="https" alt="ServiceandMe"
                                        className={logoColor}
                                        id="ServiceandMe"/>
                                </span>
                            </div>

                            <Link to="/"
                                className={hd}
                                id="hd1"
                                onClick={
                                    () => scrowDownPage(0)
                            }>
                                Home
                            </Link>

                            <Link to="/"
                                className={hd}
                                id="hd2"
                                onClick={
                                    () => scrowDownPage(550)
                            }>
                                About Us
                            </Link>


                            <Link to="/"
                                className={hd}
                                id="hd3"
                                onClick={
                                    () => scrowDownPage(1700)
                            }>
                                How It Works
                            </Link>

                            <Link to="/"
                                className={hd}
                                id="hd3"
                                onClick={
                                    () => scrowDownPage(2900)
                            }>
                                Feedback
                            </Link>
                        </div>
                        <div className="shift__header__item__right">
                            <Link to="/" className="hd work--developer" id="hd4"
                                onClick={
                                    () => scrowDownPage(0)
                            }>
                                Get The App
                            </Link>
                        </div>

                        <span className="logo__mobile">
                            <img src="" alt="ServiceandMe" className="logo__ServiceandMe__mobile" id="logo-darkbank-mobile"/>
                        </span>

                        <div className="menu__icon">
                            <div id="menu-icon-wrapper" className="menu-icon-wrapper"
                                style={
                                    {
                                        visibility: "hidden",
                                        color: " rgb(0, 68, 102)",
                                        background: " rgb(0, 68, 102)"
                                    }
                            }>
                                <svg width="1000px" height="1000px">
                                    <path id="pathA" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                                    <path id="pathB" d="M 300 500 L 700 500"></path>
                                    <path id="pathC" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                                </svg>
                                <button id="menu-icon-trigger" className="menu-icon-trigger"></button>
                            </div>
                        </div>
                    </header>
                    {/* Start of Mobile View */}
                    <Helmet>
                        <script src="../../packages/js/segment.min.js"></script>
                        <script src="../../packages/js/ease.min.js"></script>
                    </Helmet>

                    <div id="dummy" className="dummy">
                        <Link to="/" className="dummy__item"
                            onClick={
                                () => scrowDownPage(0)
                        }>
                            Home
                        </Link>
                        <Link to="/aboutus/" className="dummy__item"
                            onClick={
                                () => scrowDownPage(750)
                        }>
                            About Us
                        </Link>
                        <Link to="/" className="dummy__item"
                            onClick={
                                () => scrowDownPage(2400)
                        }>
                            How It Works
                        </Link>
                        <Link to="/" className="dummy__item"
                            onClick={
                                () => scrowDownPage(3900)
                        }>
                            Feedback
                        </Link>
                        <Link to="/" className="dummy__item developer"
                            onClick={
                                () => scrowDownPage(0)
                        }>
                            Get the App
                        </Link>
                    </div>
                    <Helmet>
                        <script src="../../packages/js/main.js"></script>
                    </Helmet>
                    {/* End of Mobile View */} </div>
            </div>
        </>
    );
};

export default HomeHeader;
