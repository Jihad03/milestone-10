import React from "react";
import { Link } from "react-router-dom";
import "./Program.css";

const Program = (props) => {
  const { name, img } = props.program;
  return (
    <div className="program" style={{ backgroundImage: `url(${img})` }}>
      <div className="program-container">
        <Link to={`/course/${name}`}>
          <div className="program-title">
            <h3>
              {name} <i className="fa-solid fa-arrow-right"></i>
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Program;
