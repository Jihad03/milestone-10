import React from "react";
import "./WhyUs.css";
import feature1 from "../../../imgs/feature1.png";
import feature2 from "../../../imgs/feature2.png";
import feature3 from "../../../imgs/feature3.png";

const WhyUs = () => {
  return (
    <section id="why-us">
      <h2>
        Why <span className="text-highlight">Choose Us</span>
      </h2>
      <div className="features">
        <div className="feature">
          <img src={feature1} alt="" />
          <h3>Free fitness training</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            cumque tempora ullam harum fugiat perspiciatis inventore a veritatis
            quaerat alias.
          </p>
        </div>
        <div className="feature">
          <img src={feature2} alt="" />
          <h3>Tons of cardio and strength</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            cumque tempora ullam harum fugiat perspiciatis inventore a veritatis
            quaerat alias.
          </p>
        </div>
        <div className="feature">
          <img src={feature3} alt="" />
          <h3>No commitment memberships</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            cumque tempora ullam harum fugiat perspiciatis inventore a veritatis
            quaerat alias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
