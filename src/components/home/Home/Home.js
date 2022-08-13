import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Hero from "../Hero/Hero";
import Motto from "../Motto/Motto";
import Programs from "../Programs/Programs";
import WhyUs from "../WhyUs/WhyUs";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Motto></Motto>
      <AboutUs></AboutUs>
      <Programs></Programs>
      <WhyUs></WhyUs>
      <Footer></Footer>
    </>
  );
};

export default Home;
