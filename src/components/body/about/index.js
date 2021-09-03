import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Shivam Sindhi</span>.
          <br /> I love experimenting with the web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/Coding.png").default}
            className="picture"
            alt="code"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
