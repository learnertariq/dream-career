import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "../styles/Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section className="container services-container">
      <h2 className="text-center fs-1 mt-5 mb-3">Services</h2>
      <div className="services row row-cols-1 row-cols-md-3">
        {data.map((s) => (
          <div key={s.id} className="service col">
            <Card>
              <Card.Img variant="top" src={s.img} />
              <Card.Body>
                <Card.Title>{s.name}</Card.Title>
                <Card.Text className="text-success fw-bold fs-3">
                  ${s.price}
                </Card.Text>
                <Card.Text>{s.text}</Card.Text>
                <Link to="/checkout" state={s} className="btn btn-success">
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
