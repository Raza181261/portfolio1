import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Raza ur rehman</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
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
            href="https://www.instagram.com/raza_ur_rehman007?igsh=MXRlcG8zYTJ0dG9teA=="
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/raza-ur-rehman-6525472a6/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Raza181261"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
