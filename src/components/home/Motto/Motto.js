import React from "react";
import "./Motto.css";
import motto1 from "../../../imgs/motto1.png";
import motto2 from "../../../imgs/motto2.png";
import motto3 from "../../../imgs/motto3.png";

const Motto = () => {
  return (
    <section id="motto-container">
      <div className="motto1">
        <div className="motto">
          <img src={motto1} alt="" />
          <h2>Progression</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            eligendi cupiditate adipisci eius tenetur quidem.
          </p>
        </div>
      </div>
      <div className="motto2">
        <div className="motto">
          <img src={motto2} alt="" />
          <h2 className="text-highlight">Workout</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            eligendi cupiditate adipisci eius tenetur quidem.
          </p>
        </div>
      </div>
      <div className="motto3">
        <div className="motto">
          <img src={motto3} alt="" />
          <h2>Nutrition</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            eligendi cupiditate adipisci eius tenetur quidem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Motto;
