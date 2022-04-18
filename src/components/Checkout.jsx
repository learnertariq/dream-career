import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const serviceFound = location?.state?.from?.state;
  console.log(serviceFound);
  return (
    <div className="container">
      <h1>Checkout page</h1>
    </div>
  );
};

export default Checkout;
