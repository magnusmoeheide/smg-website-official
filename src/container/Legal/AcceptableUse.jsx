import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const AcceptableUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);

  return (
    <div className="legal">
      <Navbar />

      <h2>Acceptable Use Policy ✔️</h2>
      <p>Hello</p>
    </div>
  );
};

export default AcceptableUse;
