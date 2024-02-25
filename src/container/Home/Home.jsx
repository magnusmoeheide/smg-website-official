import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";
import YoutubeEmbed from "./YoutubeEmbed";

const Home = () => {
  const [answersVisible, setAnswersVisible] = useState({});

  function toggleAnswer(qaId) {
    setAnswersVisible({
      ...answersVisible,
      [qaId]: !answersVisible[qaId],
    });
  }

  const { t, i18n } = useTranslation();

  return (
    <div>
      <Header showAllLinks={true} />

      <section className="hero" id="/">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              {t("heroTitle")}{" "}
              <span className="orange">{t("heroTitleOrange")}</span>
            </h1>
            <p className="hero-text">{t("heroText")}</p>
            <a href={t("signupLink")}>
              <button className="hero-button">{t("startBtn")}</button>
            </a>
            {/* <Link to="/getstarted">
              <button className="hero-button">{t("startBtn")}</button>
            </Link> */}
          </div>
          <div className="hero-image">
            <YoutubeEmbed embedId="r0YQjwqJhNA" />
          </div>
        </div>
      </section>

      <section className="features-section" id="about">
        <h2 className="features-title">
          {t("featuresTitle")}{" "}
          <span className="orange">{t("featuresTitleOrange")}</span>
        </h2>
        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">
              <img src={images.easyToUse} alt="" />
            </div>
            <h3 className="feature-header">{t("feature1Title")}</h3>
            <p className="feature-text">{t("feature1Text")}</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={images.algorithm} alt="" />
            </div>
            <h3 className="feature-header">{t("feature2Title")}</h3>
            <p className="feature-text">{t("feature2Text")}</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src={images.privacy} alt="" />
            </div>
            <h3 className="feature-header">{t("feature3Title")}</h3>
            <p className="feature-text">{t("feature3Text")}</p>
          </div>
        </div>
      </section>

      <section className="reasons-section">
        <h2 className="reasons-title">
          {t("reasonsTitle")}{" "}
          <span className="orange">{t("reasonsTitleOrange")}</span>
        </h2>
        <div className="reasons">
          <div className="reasons-container">
            <div className="reason">
              <div className="reason-text">
                <h3 className="reason-title">
                  <img src={images.clock} />
                  <span>{t("reason1Title")}</span>
                </h3>
                <p className="reason-description">{t("reason1Text")}</p>
              </div>

              <div className="reason-text">
                <h3 className="reason-title">
                  <img src={images.profits} />
                  <span>{t("reason2Title")}</span>
                </h3>
                <p className="reason-description">{t("reason2Text")}</p>
              </div>

              <div className="reason-text">
                <h3 className="reason-title">
                  <img src={images.battery} />
                  <span>{t("reason3Title")}</span>
                </h3>
                <p className="reason-description">{t("reason3Text")}</p>
              </div>
            </div>

            <div className="reason-side">
              <div className="reason-image">
                <img src={images.teacher} alt="Reasons Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="pricing-container">
          <h2 className="pricing-title">
            {t("pricingTitle1")}
            <span className="orange"> {t("pricingTitleOrange")}</span>{" "}
            {t("pricingTitle2")}
          </h2>
          <div className="pricing-plan">
            <h2 className="plan-title">{t("plan1Title")}</h2>
            <p className="plan-description">{t("plan1Description")}</p>
            <h3 className="plan-cost">
              {t("plan1Price")}
              <span className="plan-cost-period"> {t("plan1PricePeriod")}</span>
            </h3>
            <p className="plan-description">{t("plan1PriceDescription")}</p>
            <p className="plan-title-included">{t("plan1IncludedTitle")}</p>
            <ul className="plan-details">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("plan1Included1")}</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("plan1Included2")}</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>{t("plan1Included3")}</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("plan1Included4")}</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("plan1Included5")}</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("plan1Included6")}</span>
              </li>
            </ul>

            <a href={t("signupLink")}>
              <button className="start-now-button">{t("startBtn")}</button>
            </a>
            {/* <Link to="/getstarted">
              <a
                href="app.klassekartgenerator.no"
                target="_blank"
                className="start-now-button"
              >
                {t("startBtn")}
              </a>
            </Link> */}
            <p className="plan-description mva">{t("plan1Comment")}</p>
          </div>

          {/* <div className="pricing-plan">
            <h2 className="plan-title">Demo</h2>
            <p className="plan-description">
              Our demo version is meant for testing purposes only. It will not
              save you a significant amount of time.
            </p>
            <h3 className="plan-cost">€0</h3>
            <p className="plan-title-included">What's included:</p>
            <ul className="plan-details">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>All conditions and arrangements</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="red"
                    fill-rule="evenodd"
                    d="M15.414 5.586a1 1 0 00-1.414 0L10 8.586l-4.586-3.586a1 1 0 00-1.414 1.414L8.586 10l-4.586 4.586a1 1 0 001.414 1.414L10 11.414l4.586 4.586a1 1 0 001.414-1.414L11.414 10l4.586-4.586z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Unlimited classes and maps</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="red"
                    fill-rule="evenodd"
                    d="M15.414 5.586a1 1 0 00-1.414 0L10 8.586l-4.586-3.586a1 1 0 00-1.414 1.414L8.586 10l-4.586 4.586a1 1 0 001.414 1.414L10 11.414l4.586 4.586a1 1 0 001.414-1.414L11.414 10l4.586-4.586z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Save your classes and conditions</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="red"
                    fill-rule="evenodd"
                    d="M15.414 5.586a1 1 0 00-1.414 0L10 8.586l-4.586-3.586a1 1 0 00-1.414 1.414L8.586 10l-4.586 4.586a1 1 0 001.414 1.414L10 11.414l4.586 4.586a1 1 0 001.414-1.414L11.414 10l4.586-4.586z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>See other teachers' maps</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="red"
                    fill-rule="evenodd"
                    d="M15.414 5.586a1 1 0 00-1.414 0L10 8.586l-4.586-3.586a1 1 0 00-1.414 1.414L8.586 10l-4.586 4.586a1 1 0 001.414 1.414L10 11.414l4.586 4.586a1 1 0 001.414-1.414L11.414 10l4.586-4.586z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Reports and school stats</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 28 8"
                >
                  <path
                    fill="rgb(255, 120, 1)"
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Excellent support</span>
              </li>
            </ul>
            <br />
            <a
              href="app.klassekartgenerator.no"
              target="_blank"
              className="start-now-button"
            >
              Try Demo
            </a>
          </div> */}
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <h2 className="testimonials-title">
          {t("testimonialsTitle1")}{" "}
          <span className="orange">{t("testimonialsTitleOrange")}</span>{" "}
          {t("testimonialsTitle2")}
        </h2>

        <div className="testimonials-container">
          <div className="testimonial">
            <img
              src={images.graduation}
              alt="Testimonial image"
              className="testimonial-image"
            />
            <p className="testimonial-text">{t("testimonial1Text")}</p>
            <p className="testimonial-name">Hans Petter</p>
          </div>
          <div className="testimonial">
            <img
              src={images.graduation}
              alt="Testimonial image"
              className="testimonial-image"
            />
            <p className="testimonial-text">{t("testimonial2Text")}</p>
            <p className="testimonial-name">Erik Larsen</p>
          </div>
        </div>
      </section>

      <div
        className="trustpilot-widget center"
        data-locale="en-GB"
        data-template-id="5419b6a8b0d04a076446a9ad"
        data-businessunit-id="6431713917cc990a6d1b67ae"
        data-style-height="24px"
        data-style-width="100%"
        data-theme="light"
        data-min-review-count="10"
        data-without-reviews-preferred-string-id="3"
        data-style-alignment="center"
      >
        <a
          href="https://uk.trustpilot.com/review/klassekartgenerator.no"
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>

      <section className="qa-section" id="q&a">
        <h2 className="qa-title">
          {t("qaTitle")} <span className="orange">{t("qaTitleOrange")}</span>
        </h2>
        <div className="qa-container">
          <div className="qa" onClick={() => toggleAnswer("qa1")}>
            <h3 className="qa-question">{t("qaQuestion1")}</h3>
            <div
              className="qa-answer"
              style={{ display: answersVisible["qa1"] ? "block" : "none" }}
            >
              <p>{t("qaAnswer1")}</p>
            </div>
            <button
              className={`qa-button ${answersVisible["qa1"] ? "active" : ""}`}
            >
              {answersVisible["qa1"] ? "-" : "+"}
            </button>
          </div>
          <div className="qa" onClick={() => toggleAnswer("qa2")}>
            <h3 className="qa-question">{t("qaQuestion2")}</h3>
            <div
              className="qa-answer"
              style={{ display: answersVisible["qa2"] ? "block" : "none" }}
            >
              <p>{t("qaAnswer2")}</p>
            </div>
            <button
              className={`qa-button ${answersVisible["qa2"] ? "active" : ""}`}
            >
              {answersVisible["qa2"] ? "-" : "+"}
            </button>
          </div>

          {/*
          <div className="qa" onClick={() => toggleAnswer("qa3")}>
            <h3 className="qa-question">
              What are the benefits of the generator?
            </h3>
            <div
              className="qa-answer"
              style={{ display: answersVisible["qa3"] ? "block" : "none" }}
            >
              <p></p>
            </div>
            <button
              className={`qa-button ${answersVisible["qa3"] ? "active" : ""}`}
            >
              {answersVisible["qa3"] ? "-" : "+"}
            </button>
          </div>
          */}
          <div className="qa" onClick={() => toggleAnswer("qa4")}>
            <h3 className="qa-question">{t("qaQuestion3")}</h3>
            <div
              className="qa-answer"
              style={{ display: answersVisible["qa4"] ? "block" : "none" }}
            >
              <p>{t("qaAnswer3")}</p>
            </div>
            <button
              className={`qa-button ${answersVisible["qa4"] ? "active" : ""}`}
            >
              {answersVisible["qa4"] ? "-" : "+"}
            </button>
          </div>
        </div>
      </section>

      <section className="article-section">
        <h2 className="section-heading">
          Research <span className="orange">Articles</span>
        </h2>
        <div className="article-container">
          <div className="article-preview">
            <Link to="/articles/privacy">
              <img src={images.classroom} alt="Article 1" />
              <h3 className="article-title">
                The importance of data privacy in education, and the essential
                strategies.
              </h3>
            </Link>
          </div>
          <div className="article-preview">
            <Link to="/articles/seatingarrangement">
              <img src={images.student} alt="Article 2" />
              <h3 className="article-title">
                The relationship between classroom seating arrangement and
                maximized academic and social development of students.
              </h3>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
