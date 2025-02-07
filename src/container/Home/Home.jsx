import React, { useState } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Reasons from "../Reasons/Reasons";
import Pricing from "../Pricing/Pricing";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const [answersVisible, setAnswersVisible] = useState({});

  function toggleAnswer(qaId) {
    setAnswersVisible({
      ...answersVisible,
      [qaId]: !answersVisible[qaId],
    });
  }

  const { t } = useTranslation();

  return (
    <div>
      <Hero />

      <Features />

      <Reasons />

      <Pricing />

      <Testimonials />

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
