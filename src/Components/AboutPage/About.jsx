import React from "react";

const About = () => {
  return (
    <>
      <div className="d-flex flex-column text-center  justify-content-center align-items-center vh-100 w-100">
        <h1
          style={{
            fontSize: "135px",
            fontFamily: "Ysabeau Office",
            fontWeight: "400",
          }}
        >
          About Us
        </h1>
        <p style={{ fontSize: "50px", fontFamily: "Raleway" }}>
          Learn more about our store and our values.
        </p>
      </div>
    </>
  );
};

export default About;
