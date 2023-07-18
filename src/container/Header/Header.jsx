import React from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const lngs = [
    { code: "no", native: "🇳🇴" },
    { code: "en", native: "🇬🇧" },
  ];
  const { t, i18n } = useTranslation();
  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  // Get the domain from the URL
  const domain = window.location.hostname;

  // Check if the domain contains "no" or "en"
  if (domain.includes("no")) {
    handleTrans("no"); // Change to Norwegian language
  } else if (domain.includes("en")) {
    handleTrans("en"); // Change to English language
  }

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <Link to="/">
              <a href="">
                <img src={images[`${t("logo")}`]} alt="" />
              </a>
            </Link>
          </div>
          <div className="links-container">
            <a href="/" className="link">
              {t("headerHome")}
            </a>
            <a href="#about" className="link">
              {t("headerAbout")}
            </a>
            <a href="#pricing" className="link">
              {t("headerPricing")}
            </a>
            <a href="#testimonials" className="link">
              {t("headerTestimonials")}
            </a>
            <a href="#q&a" className="link">
              {t("headerQA")}
            </a>
          </div>

          <div className="button-container">
            <div className="child">
              <div>
                {lngs.map((lng, i) => {
                  const { code, native } = lng;
                  return (
                    <button
                      className="langBtn"
                      onClick={() => handleTrans(code)}
                    >
                      {native}
                    </button>
                  );
                })}
              </div>

              <a
                className="login-button"
                href="http://app.klassekartgenerator.no/login"
              >
                {t("headerLogin")}
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
