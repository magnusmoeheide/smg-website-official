import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <div>
      <img src={images.logoEn} className="legalImg" />
      <h1>Legal</h1>
      <p>
        The following pages contain the legal requrements for the use of{" "}
        <a href="klassekartgenerator.no">klassekartgenerator.no</a> and our app{" "}
        <a href="app.klassekartgenerator.no">app.klassekartgenerator.no</a>.
        <br />
        Do not hesitate to contact us on{" "}
        <a href="mailto:hei@klassekartgenerator.no">
          hei@klassekartgenerator.no
        </a>{" "}
        if you have any questions regarding our terms and policies.
      </p>

      <Link to="/">
        <button>👈🏾 Back to page</button>
      </Link>

      <Link to="/terms">
        <button>Terms and Conditions 📃</button>
      </Link>

      <Link to="/privacy">
        <button>Privacy Policy 🔒</button>
      </Link>

      <Link to="/eula">
        <button>EULA 🧑‍🏫</button>
      </Link>

      <Link to="/cookies">
        <button>Cookie Policy 🍪</button>
      </Link>

      <Link to="/return">
        <button>Return Policy 🚚</button>
      </Link>

      <Link to="/disclaimer">
        <button>Disclaimer 📜</button>
      </Link>

      <Link to="/use">
        <button>Acceptable Use Policy ✔️</button>
      </Link>

      <br />
      <br />
    </div>
  );
};

export default Navbar;
