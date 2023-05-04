import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);

  return (
    <div className="legal">
      <Navbar />

      <h2>Privacy Policy 🔒</h2>
    </div>
  );
};

export default Privacy;
