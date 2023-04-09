import React from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <Link to="/">
              <a href="">
                <img src={images.logoEn} alt="" />
              </a>
            </Link>
          </div>
          <div className="links-container">
            <a href="/" className="link">
              Home
            </a>
            <a href="/" className="link">
              About
            </a>
            <a href="/" className="link">
              Pricing
            </a>
            <a href="/" className="link">
              Testimonials
            </a>
            <a href="/" className="link">
              Q&A
            </a>
          </div>
          <div className="button-container">
            <a
              className="login-button"
              href="app.klassekartgenerator.no"
              target="_blank"
            >
              Log in <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
