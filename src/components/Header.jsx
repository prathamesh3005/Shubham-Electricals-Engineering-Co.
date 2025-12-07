// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-bar">
        <div className="header-brand">
          <Link to="/" className="logo-wrap">
            {/* Put your actual logo file in /public or /src/assets and update src */}
            <img src="/img/SEElogo 2.jpg" alt="SEE Logo" className="logo-img" />
          </Link>
          <div className="brand-text">
            <h1 className="brand-name">Shubham Electricals &amp; Engineering Co.</h1>
            <h2 className="brand-tagline">
              Government Authorised Electrical Contractor.
            </h2>
            <p className="brand-meta">
              <i className="fa fa-check-circle" /> GST 27AHAPT3742M1ZY&nbsp; |&nbsp;
              <a
                href="https://goo.gl/maps/XMPg4Kvu8oU7po4HA"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-map-marker" /> Pune, Maharashtra.
              </a>
            </p>
          </div>
        </div>

        <nav className="header-nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
