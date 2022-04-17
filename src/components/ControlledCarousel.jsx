import { useState } from "react";
import { Carousel } from "react-bootstrap";

const data = [{}, {}, {}];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src="banner.jpg" alt="First slide" />
          <Carousel.Caption>
            <h2 className="fs-1">Find Your Ideal Career</h2>
            <p className="">
              Are you stuck in a job you don't enjoy? Not sure which career
              direction to take? If you want to have a job you are passionate
              about, well, you can!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
