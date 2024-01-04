import React from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links-container">
            <a href={`mailto:${t("contactEmail")}`} className="footer-link">
              {t("contactButton")}
            </a>
            <Link to="/terms">
              <a className="footer-link">{t("termsButton")}</a>
            </Link>
          </div>
          <div className="footer-copy">
            © 2023 {t("address")} |{" "}
            <a
              href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=932761173"
              className="footer-business"
              target="_blank"
            >
              Magnus Heide AS.
            </a>{" "}
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
