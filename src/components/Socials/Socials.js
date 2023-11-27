import React from "react";
import "./socials.scss";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

const Socials = () => {
  return (
    <div className="pillow-socials">
      <a
        href="https://github.com/adivrskic/pillow"
        className="pillow-socials__link"
      >
        <IoLogoGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/adi-vrskic-48758213b/"
        className="pillow-socials__link"
      >
        <IoLogoLinkedin />
      </a>
      <a href="mailto:adivrskic123@gmail.com" className="pillow-socials__link">
        <IoMail />
      </a>
    </div>
  );
};

export default Socials;
