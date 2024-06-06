import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1
            style={{
              fontSize: "6rem",
              marginBottom: "1rem",
              fontFamily: "Ysabeau Office",
              letterSpacing: "10px",
              fontWeight: "400",
            }}
          >
            Welcome to Our Website
          </h1>
          <p style={{ fontSize: "2rem", fontFamily: "Raleway" }}>
            We are dedicated to providing you with the best products and
            services.
          </p>
          <p style={{ fontSize: "2rem", fontFamily: "Raleway" }}>
            Explore our website to discover our latest offerings.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
