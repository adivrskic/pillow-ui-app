import React from "react";
import "./footer.scss";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <div className="pillow-footer">
      <p className="pillow-footer__text">© Adi Vrskic 2023,2024</p>
      <div className="pillow-footer__links">
        <Socials />
        <p className="pillow-footer__text">Made with React </p>
      </div>
    </div>
  );
};

export default Footer;
