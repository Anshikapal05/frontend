import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);

  return (
    <footer className={isAuthorized ? "footerShow" :  "footerHide"}>
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Welcome to our platform! We are dedicated to connecting job seekers
            with opportunities and employers with the talent they need. Our
            mission is to make the process seamless and efficient for everyone.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="footer-section connect">
          <h3>Connect With Us</h3>
          <p>Follow us on our social media channels:</p>
          <div className="social-links">
            <Link to="https://facebook.com" target="_blank">
              <FaFacebookF />
            </Link>
            <Link to="https://youtube.com" target="_blank">
              <FaYoutube />
            </Link>
            <Link to="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </Link>
            <Link to="https://instagram.com" target="_blank">
              <RiInstagramFill />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div>&copy; 2024 || All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
