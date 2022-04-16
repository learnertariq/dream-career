import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <section
        className="banner"
        style={{ backgroundImage: 'url("/banner.jpg")' }}
      >
        <div className="container pt-5">
          <h1 className="text-success mt-5">Dream Career</h1>
          <h2 className="text-danger fs-1">Find Your Ideal Career</h2>
          <p className="hero-inner-text">
            Are you stuck in a job you don’t enjoy? Not sure which career
            direction to take? If you want to have a job you are passionate
            about, well, you can!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
