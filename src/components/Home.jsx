import React from "react";
import "../styles/Home.css";
import ControlledCarousel from "./ControlledCarousel";

const Home = () => {
  return (
    <div>
      <section
      // className="banner"
      // style={{ backgroundImage: 'url("/banner.jpg")' }}
      >
        <ControlledCarousel />
      </section>
    </div>
  );
};

export default Home;
