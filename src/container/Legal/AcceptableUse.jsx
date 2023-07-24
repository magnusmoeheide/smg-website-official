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
      <i>Last updated April 7, 2023</i>
      <br />
      <br />
      <p>
        This Acceptable Use Policy ("Policy') is part of our Terms and
        Conditions ('Legal Terms') and should therefore be read alongside our
        main Legal Terms: klassekartgenerator.no/terms. If you do not agree with
        these Legal Terms, please refrain from using our Services. Your
        continued use of our Services implies acceptance of these Legal Terms.
      </p>
      <p>Please carefully review this Policy which applies to any and all:</p>
      <ul>
        <li>(a) uses of our Services (as defined in 'Legal Terms') and</li>
        <li>
          (b) forms, materials, consent tools, comments, post, and all other
          content available on the Services ('Content')
        </li>
      </ul>
      <h3>WHO WE ARE</h3>
      <p>
        We are Magnus Heide ENK, doing business as Klassekartgenerator.no
        ('Company', 'we', 'us', or 'our') a company registered in Norway at
        Manglebergveien 8E, Oslo, Oslo 0678. We operate the website
        http://klassekartgenerator.no (the 'Site'), as well as any other related
        products and services that refer or link to this Policy (collectively,
        the 'Services').
      </p>
      <h3>USE OF THE SERVICES</h3>
      <p>
        When you use the Services you warrant that you will comply with this
        Policy and with all applicable laws.
      </p>
      <p>You also acknowledge that you may not:</p>
      <ul>
        <li>
          Systematically retrieve data or other content from the Services to
          create or compile, directly or indirectly, a collection, compilation,
          database, or directory without written permission from us.
        </li>
        <li>
          Make any unauthorised use of the Services, including collecting
          usernames and/or email addresses of users by electronic or other means
          for the purpose of sending unsolicited email, or creating user
          accounts by automated means or under false pretences.
        </li>
        <li>
          Circumvent, disable, or otherwise interfere with security-related
          features of the Services, including features that prevent or restrict
          the use or copying of any Content or enforce limitations on the use of
          the Services and/or the Content contained therein.
        </li>
        <li>Engage in unauthorised framing of or linking to the Services.</li>
        <li>
          Trick, defraud, or mislead us and other users, especially in any
          attempt to learn sensitive account information such as user passwords.
        </li>
        <li>
          Make improper use of our Services, including our support services or
          submit false reports of abuse or misconduct.
        </li>
        <li>
          Engage in any automated use of the Services, such as using scripts to
          send comments or messages, or using any data mining, robots, or
          similar data gathering and extraction tools.
        </li>
        <li>
          Interfere with, disrupt, or create an undue burden on the Services or
          the networks or the Services connected.
        </li>
        <li>
          Attempt to impersonate another user or person or use the username of
          another user.
        </li>
        <li>
          Use any information obtained from the Services in order to harass,
          abuse, or harm another person.
        </li>
        <li>
          Use the Services as part of any effort to compete with us or otherwise
          use the Services and/or the Content for any revenue-generating
          endeavour or commercial enterprise.
        </li>
        <li>
          Decipher, decompile, disassemble, or reverse engineer any of the
          software comprising or in any way making up a part of the Services,
          except as expressly permitted by applicable law.
        </li>
        <li>
          Attempt to bypass any measures of the Services designed to prevent or
          restrict access to the Services, or any portion of the Services.
        </li>
        <li>
          Harass, annoy, intimidate, or threaten any of our employees or agents
          engaged in providing any portion of the Services to you.
        </li>
        <li>
          Delete the copyright or other proprietary rights notice from any
          Content.
        </li>
        <li>
          Copy or adapt the Services’ software, including but not limited to
          Flash, PHP, HTML, JavaScript, or other code.
        </li>
        <li>
          Upload or transmit (or attempt to upload or to transmit) viruses,
          Trojan horses, or other material, including excessive use of capital
          letters and spamming (continuous posting of repetitive text), that
          interferes with any party’s uninterrupted use and enjoyment of the
          Services or modifies, impairs, disrupts, alters, or interferes with
          the use, features, functions, operation, or maintenance of the
          Services.
        </li>
        <li>
          Upload or transmit (or attempt to upload or to transmit) any material
          that acts as a passive or active information collection or
          transmission mechanism, including without limitation, clear graphics
          interchange formats ('gifs'), 1x1 pixels, web bugs, cookies, or other
          similar devices (sometimes referred to as 'spyware' or ‘passive
          collection mechanisms’ or 'pcms').
        </li>
        <li>
          Except as may be the result of standard search engine or Internet
          browser usage, use, launch, develop, or distribute any automated
          system, including without limitation, any spider, robot, cheat
          utility, scraper, or offline reader that accesses the Services, or
          using or launching any unauthorised script or other software.
        </li>
        <li>
          Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
          Services.
        </li>
        <li>
          Use the Services in a manner inconsistent with any applicable laws or
          regulations.
        </li>
        <li>Sell or otherwise transfer your profile.</li>
      </ul>
      <br />
      <p>
        If you subscribe to our Services, you understand, acknowledge, and agree
        that you may not, except if expressly permitted:
      </p>
      <ul>
        <li>
          Engage in any use, including modification, copying, redistribution,
          publication, display, performance, or retransmission, of any portions
          of any Services, other than as expressly permitted by this Policy,
          without the prior written consent of Magnus Heide ENK, which consent
          Magnus Heide ENK may grant or refuse in its sole and absolute
          discretion.
        </li>
        <li>
          Reconstruct or attempt to discover any source code or algorithms of
          the Services, or any portion thereof, by any means whatsoever.
        </li>
        <li>Intercept any data not intended for you.</li>
        <li>
          Damage, reveal, or alter any user's data, or any other hardware,
          software, or information relating to another person or entity.
        </li>
      </ul>
      <h3>CONSEQUENCES OF BREACHING THIS POLICY</h3>
      <p>
        The consequences for violating our Policy will vary depending on the
        severity of the breach and the user's history on the Services, by way of
        example:
      </p>
      <p>
        We may, in some cases, give you a warning, however, if your breach is
        serious or if you continue to breach our Legal Terms and this Policy, we
        have the right to suspend or terminate your access to and use of our
        Services and, if applicable, disable your account. We may also notify
        law enforcement or issue legal proceedings against you when we believe
        that there is a genuine risk to an individual or a threat to public
        safety.
      </p>
      <p>
        We exclude our liability for all action we may take in response to any
        of your breaches of this Policy.
      </p>
      <h3>HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h3>
      <p>
        If you have any further questions or comments, you may contact us by
        email:{" "}
        <a href="mailto:hei@klassekartgenerator.no">
          hei@klassekartgenerator.no
        </a>
      </p>
    </div>
  );
};

export default AcceptableUse;
