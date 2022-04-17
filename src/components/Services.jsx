import React from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/Services.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Starter Consultation",
    price: 199,
    img: img1,
    text: "Includes our Ideal Career and Job Search Workbooks, over 200 pages detailing our complete coaching program and strategy",
  },
  {
    name: "Professional",
    price: 249,
    img: img2,
    text: "Twice a month one-on-one 55 minute sessions with one of our coaches on career direction, job search or work performance",
  },
  {
    name: "Premium",
    price: 299,
    img: img3,
    text: "Three times a month one-on-one 55 minute sessions with one of our career coaches on career direction, job search or work performance",
  },
];

const Services = () => {
  return (
    <section className="container services-container">
      <h2 className="text-center fs-1 mt-5 mb-3">Services</h2>
      <div className="services row row-cols-1 row-cols-md-3">
        {data.map((s, i) => (
          <div key={i} className="service col">
            <Card>
              <Card.Img variant="top" src={s.img} />
              <Card.Body>
                <Card.Title>{s.name}</Card.Title>
                <Card.Text className="text-success fw-bold fs-3">
                  ${s.price}
                </Card.Text>
                <Card.Text>{s.text}</Card.Text>
                <Link to="/checkout" className="btn btn-success">
                  Enroll Now
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
