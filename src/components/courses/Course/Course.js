import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import "./Course.css";

const Course = () => {
  const { courseId } = useParams();
  return (
    <div className="course">
      <Navbar></Navbar>
      <h1>
        Welcome to the <span className="text-highlight">{courseId}</span> Course
        <br />
        Course Content will be uploaded Soon
      </h1>
    </div>
  );
};

export default Course;
