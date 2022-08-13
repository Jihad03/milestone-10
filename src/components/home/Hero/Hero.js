import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero-container">
      <div id="hero">
        <div className="hero-content">
          <h1>
            The best fitness <br /> hub in town
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            quia doloremque nihil quibusdam eos quos illo totam quaerat nesciunt
            unde, distinctio fugiat voluptatum alias odit?
          </p>
          <button className="hero-btn">Join us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
