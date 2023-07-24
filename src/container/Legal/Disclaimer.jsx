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
      <i>Last updated April 7, 2023</i>
      <h3>WEBSITE DISCLAIMER</h3>
      <p>
        The information provided by Magnus Heide ENK ("we," "us," or "our") on
        Klassekartgenerator.no (the "Site") and our application is for general
        informational purposes only. All information on the Site and our
        application is provided in good faith, however we make no representation
        or warranty of any kind, express or implied, regarding the accuracy,
        adequacy, validity, reliability, availability, or completeness of any
        information on the Site or our application.
      </p>
      <p>
        UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR
        DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR
        APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR
        APPLICATION. YOUR USE OF THE SITE AND OUR APPLICATION AND YOUR RELIANCE
        ON ANY INFORMATION ON THE SITE AND OUR APPLICATION IS SOLELY AT YOUR OWN
        RISK.
      </p>
    </div>
  );
};

export default Disclaimer;
