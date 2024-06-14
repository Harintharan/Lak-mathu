import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Let us recognize and appreciate the dedication of doctors everywhere. Their commitment to healing and their unwavering support for patients make a profound difference in our lives. Today, and every day, let us express our gratitude to doctors for their selflessness and their tireless efforts to keep us healthy and safe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
