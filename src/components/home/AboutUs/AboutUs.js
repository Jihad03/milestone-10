import React from "react";
import "./AboutUs.css";
import aboutBg from "../../../imgs/about-bg.jpg";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="about-section-img half-width">
        <img src={aboutBg} alt="" />
      </div>
      <div className="about-section-content half-width">
        <h2 className="text-highlight">About Us</h2>
        <h3>We are here to dream!</h3>
        <h3>Our team is hear to serve you.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          quasi voluptatem fugit impedit exercitationem nesciunt eum vel
          repellat beatae sapiente at itaque mollitia iste architecto
          perferendis neque quas quam, consequatur provident quidem facere
          dolorem non ipsa rerum. Ad ratione, quo corporis distinctio quaerat,
          enim maxime nesciunt molestiae et aliquam animi! Sed eligendi quod,
          tempora ad doloribus odit, ipsa qui dicta iusto quis cupiditate minus
          officia asperiores. Quibusdam architecto aliquam perferendis atque
          harum, nesciunt facilis nisi, sint autem magni velit commodi?
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
