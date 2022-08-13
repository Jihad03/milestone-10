import React, { useEffect, useState } from "react";
import Program from "../Program/Program";
import "./Programs.css";

const Programs = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("./programs.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section id="programs">
      <h2>
        Our <span className="text-highlight">Courses</span>
      </h2>
      <div className="programs-container">
        {data?.map((program) => (
          <Program key={program.id} program={program}></Program>
        ))}
      </div>
    </section>
  );
};

export default Programs;
