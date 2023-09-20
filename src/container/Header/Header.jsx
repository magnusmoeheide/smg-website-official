import React from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";

const Header = ({ showAllLinks }) => {
  const { t } = useTranslation();

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
            {showAllLinks && (
              <>
                <a href="#about" className="link">
                  {t("headerAbout")}
                </a>
                <a href="#pricing" className="link">
                  {t("headerPricing")}
                </a>
                <a href="#q&a" className="link">
                  {t("headerQA")}
                </a>
                <Link to="/pages/guide">
                  <a className="link">Guide</a>
                </Link>
              </>
            )}
          </div>

          <div className="button-container">
            <div className="child">
              <div>
                <LanguageSelector />
              </div>
              <a href={t("loginLink")}>
                <button className="login-button"> {t("headerLogin")}</button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
