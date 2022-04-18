import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary">About Me</h1>
      <div className="about-me-container rounded mx-auto p-2">
        <img
          className="about-me-img d-block mx-auto"
          src="profile.jpg"
          alt=""
        />
        <h2 className="text-center">Md Tariqul Islam</h2>
        <h5 className="text-secondary fw-normal text-center">
          Junior Web Debeloper
        </h5>

        <div className="about-text px-5">
          <p>
            You will surprise to know about my aim why I want to be a Web
            Developer. Specially my goal not is not specific to web. I am quite
            tech savvy person. I want to lead a simple life and I want to help
            others. Time and and Leisure are the two most precious gift given by
            Allah. I believe, Being a web developer I can help the clients as
            well as the poor people. So, I try to work hard and teach my mind
            not to be dissatisfied at any blessing given by Allah. And I try to
            utilize time and being patient I believe to change the world so that
            We can have the satisfaction of our Creator Allah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
