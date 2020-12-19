import React from "react";

import "../styles/homeFooter.css";

import { Helmet } from "react-helmet";

const HomeFooter = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Helmet>
      <footer className="footer">
        <div className="social__footer">
          <a href="https://medium/omosteven/" className="facebook social--icon">
            <span class="fa-stack fa-lg">
              {/* <i class="fa fa-circle-thin fa-stack-2x"></i> */}
              <i class="fa fa-medium fa-stack-1x"></i>
            </span>
          </a>
          {/* <a
            href="https://facebook.com/steven.7/"
            className="facebook social--icon"
          >
            <span class="fa-stack fa-lg"> */}
          {/* <i class="fa fa-circle-thin fa-stack-2x"></i> */}
          {/* <i class="fa fa-facebook fa-stack-1x"></i>
            </span>
          </a> */}

          <a
            href="https://twitter.com/omolesteven/"
            className="twitter social--icon"
          >
            <span class="fa-stack fa-lg">
              {/* <i class="fa fa-circle-thin fa-stack-2x"></i> */}
              <i class="fa fa-twitter fa-stack-1x"></i>
            </span>
          </a>
          <a
            href="https://instagram.com/stevenomole/"
            className="instagram social--icon"
          >
            <span class="fa-stack fa-lg">
              {/* <i class="fa fa-circle-thin fa-stack-2x"></i> */}
              <i class="fa fa-instagram fa-stack-1x"></i>
            </span>
          </a>

          <a
            href="https://linkedin.com/in/steven-omole/"
            className="linkedin social--icon"
          >
            <span class="fa-stack fa-lg">
              {/* <i class="fa fa-circle-thin fa-stack-2x"></i> */}
              <i class="fa fa-linkedin fa-stack-1x"></i>
            </span>
          </a>
        </div>
        <div className="copy__right__cont">
          <p className="copy__footer">© 2020 ServiceandMe. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
