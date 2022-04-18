import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Home.css";

const data = [{}, {}, {}];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src="banner.jpg" alt="First slide" />
            <Carousel.Caption>
              <h2 className="hero-heading fw-bold mb-3">Ideal Career</h2>
              <p className="mb-0">
                If you want to have a job you are passionate about, well, you
                can!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
