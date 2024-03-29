import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.scss";

function Footer({ home_page }) {
   return (
      <div className="footer" style={home_page && { marginTop: "-5rem" }}>
         <div className="footer__content">
            <p className="appName">Netflix Teasers (netflix-clone)</p>
            <p className="createdText">created by</p>
            <a className="appAuthor" href="https://bijink.github.io" target="_blank" rel="noreferrer">
               Bijin Kandengala
            </a>
            <a
               className="githubIcon"
               href="https://github.com/bijink/netflix-teasers"
               target="_blank"
               rel="noreferrer"
            >
               <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
         </div>
      </div>
   );
}

export default Footer;
