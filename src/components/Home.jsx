import React from "react";
import "../styles/Home.css";
import ControlledCarousel from "./ControlledCarousel";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <section className="banner">
        <ControlledCarousel />
      </section>
      <Services />
    </div>
  );
};

export default Home;
