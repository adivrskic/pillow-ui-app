import React from "react";
import "./socials.scss";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

const Socials = () => {
  return (
    <div className="pillow-socials">
      <button className="pillow-socials__link">
        <IoLogoGithub />
      </button>
      <button className="pillow-socials__link">
        <IoLogoLinkedin />
      </button>
      <button className="pillow-socials__link">
        <IoMail />
      </button>
    </div>
  );
};

export default Socials;
