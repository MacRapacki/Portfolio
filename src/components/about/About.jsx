import React from "react";
import Pic from "../../images/me.png";

const About = () => {
  const aboutMeText = `I'm a self-taugh,  front-end developer who learns quickly, is ambitious and is not afraid of new challenges. The more I learn the more I am passionate about programming and a full-time job will help me develop my skills and gain professional experience.\n\nBeside programming i like cooking and watch premier league games.`;

  return (
    <section className="about bg" id="02">
      <h2>About me</h2>
      <div className="about_image">
        <img src={Pic} alt="developer" />
      </div>
      <div className="about_text_container">
        <h4>
          My name is
          <span className="about_text_container--name"> Maciej Rapacki</span>.
        </h4>
        <h3>I'm Self-Taught Front End Developer.</h3>
        <p style={{ whiteSpace: "pre-wrap" }}>{aboutMeText}</p>
        <a href="#05" className="about_contact_btn">
          Contact me
        </a>
      </div>
    </section>
  );
};

export default About;
