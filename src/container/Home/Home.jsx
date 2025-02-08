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
import FAQs from "../FAQs/FAQs";

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

      <FAQs />

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
