import React from "react";
import Pic from "../../images/about.png";

const About = () => {
  return (
    <section className="about">
      <h2>About me</h2>
      <div className="about_image">
        <img src={Pic} alt="developer" />
      </div>
      <div className="about_text_container">
        <h4>My name is Maciej Rapacki.</h4>
        <h3>I'm Self-Taught Front End Developer.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
          ad? Sunt, maxime voluptatem! Tenetur atque culpa beatae nihil quis
          quos fugit sapiente, mollitia optio maiores vero, quisquam quod
          praesentium. Sunt.
        </p>
        <button type="button" className="about_contact_btn">
          Hire me
        </button>
      </div>
    </section>
  );
};

export default About;
