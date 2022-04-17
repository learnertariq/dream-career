import React from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact mx-auto p-3 p-md-5 rounded text-center">
      <h2 className="text-white">Discover, apply, choose</h2>
      <p className="text-white">
        When it comes to your career management, having a professional career
        coach at your side is a key element to your support system. Our
        newsletter will keep you up to date and will guide you through choosing
        your career.
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Subscribe
        </Button>
      </Form>
    </section>
  );
};

export default Contact;
