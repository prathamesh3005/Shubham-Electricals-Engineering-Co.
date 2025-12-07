// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4 className="footer-title">Information</h4>
          <ul className="footer-list">
            <li>Licensed Electrical Contractor</li>
            <li>Government Authorized</li>
            <li>Solar &amp; Electrical Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Contact</h4>
          <p>Email: example@example.com</p>
          <p>Phone: 9762679127 / 8888669127</p>
        </div>

        <div>
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <i className="fa fa-facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa fa-instagram" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fa fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copy">
        copyright &copy; Shubham Electricals &amp; Engineering Co. – all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
