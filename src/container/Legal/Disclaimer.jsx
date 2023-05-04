import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);

  return (
    <div className="legal">
      <Navbar />

      <h2>Disclaimer 📜</h2>
    </div>
  );
};

export default Disclaimer;
