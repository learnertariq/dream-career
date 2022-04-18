import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const serviceFound = location?.state?.from?.state || location?.state;
  return (
    <div className="container">
      <h1>Checkout page</h1>
      <h5>Service ID: {serviceFound?.id}</h5>
      <h2>Service Name: {serviceFound?.name}</h2>
      <p>Service Description: {serviceFound?.text}</p>
    </div>
  );
};

export default Checkout;
