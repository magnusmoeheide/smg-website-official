import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Return = () => {
  return (
    <div className="legal">
      <Navbar />

      <h2>Return Policy 🚚</h2>
      <i>Last updated April 7, 2023</i>

      <h3>REFUNDS</h3>
      <p>All sales are final and no refund will be issued.</p>

      <h3>QUESTIONS</h3>
      <p>
        If you have any questions concerning our return policy, please contact
        us at hei@klassekartgenerator.no.
      </p>
    </div>
  );
};

export default Return;
