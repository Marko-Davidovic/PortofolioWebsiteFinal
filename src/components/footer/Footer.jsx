import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Smith</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/marko-davidovic-209a601a3/"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/Marko-Davidovic"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.instagram.com/marko__davidovic/"
            className="home__social-icon"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Marko Davidovic. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;