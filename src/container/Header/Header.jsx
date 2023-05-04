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
            <a href="#about" className="link">
              About
            </a>
            <a href="#pricing" className="link">
              Pricing
            </a>
            <a href="#testimonials" className="link">
              Testimonials
            </a>
            <a href="#q&a" className="link">
              Q&A
            </a>
          </div>
          <div className="button-container">
            <a
              className="login-button"
              href="http://app.klassekartgenerator.no/login"
            >
              Log in
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
