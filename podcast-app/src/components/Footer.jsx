import React from 'react';
import { IonIcon } from 'react-ionicons';

const Footer = () => {
    return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img
                src="https://raw.githubusercontent.com/codewithsadee/micro/26e662eb173cc36b8d5cb9bbc5716ac40b9b2423/assets/images/logo.svg"
                alt="Micro logo"
              />
            </a>

            <p className="footer-text">
              Welcome to our podcast platform where we bring stories and discussions that matter. Join us in exploring diverse topics and voices from around the world.
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-link-title">Start A Conversation</p>
            </li>

            <li>
              <a href="mailto:ndumisonduh523@gmail.com" className="footer-link">ndumisonduh523@gmail.com</a>
            </li>

            <li>
              <a href="tel:(+27) 65 578 4014" className="footer-link">+27 65 578 4014</a>
            </li>
          </ul>

          <div className="social-list-box">
            <p className="social-title">Follow Us On:</p>

            <ul className="social-list">
              <li>
                <a href="https://x.com/ndumiso810" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/nduh_065/" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/@nduh0656" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/ndumiso-sibanda-304836231/" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="#">Ndumiso Sibanda</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 
 