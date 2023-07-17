import React from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links-container">
            <a href="mailto:hei@klassekartgenerator.no" className="footer-link">
              Contact Us
            </a>
            <Link to="/terms">
              <a className="footer-link">Terms of Service & Policies</a>
            </Link>
          </div>
          <div className="footer-copy">
            © 2023 SeatMapGenerator.com |{" "}
            <a
              href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=824325952"
              className="footer-business"
              target="_blank"
            >
              Magnus Heide ENK.
            </a>{" "}
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
