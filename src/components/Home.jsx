import React from "react";
import "../styles/Home.css";
import ControlledCarousel from "./ControlledCarousel";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <section className="banner">
        <ControlledCarousel />
      </section>
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
