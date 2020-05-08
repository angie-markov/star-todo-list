import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer deep-purple darken-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Project by Starchitect</h5>
            <p className="grey-text text-lighten-4">
              I am a full stack web developer specializing mostly in
              JavaScript/Node.js, based in Vancouver, BC.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/angie-markov"
                  title="Github"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright deep-purple darken-4">
        <div className="container center-align">
          ©2020 {"  "}
          <a
            href="http://starchitect.tech/"
            title="Project by Starchitect"
            className="deep-purple-text text-lighten-2"
          >
            Starchitect
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
