import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  // Function to handle the form submission
  const sendEmail = (e) => {
    e.preventDefault();

    // Ensure the reCAPTCHA token is present before proceeding
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification.");
      return;
    }

    const formData = new FormData(form.current);
    const data = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      from_city: formData.get("from_city"),
      from_language: formData.get("select"),
      message: formData.get("message"),
      right_time: formData.get("right_time"),
      "g-recaptcha-response": recaptchaToken, // Include the ReCAPTCHA token
    };

    emailjs
      .send("service_84f91ls", "template_8eeyt7r", data, "bg6FWzd8BSQJyOT0R")
      .then(
        () => {
          toast.success("Email Sent Successfully!");
          form.current.reset();
          setRecaptchaToken(null);
          recaptchaRef.current.reset();
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`);
          console.log("error", error);
        }
      );
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      <div className="heading">
        <h1
          className="d-flex justify-content-center align-items-center mt-5 mb-3 text-center "
          style={{ fontSize: "55px" }}
        >
          Contact Us
        </h1>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29526.962585298126!2d70.71038923014986!3d22.320743553533337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c9007e0a76c1%3A0xeb4be5591eb4f3de!2sAtal%20sarovar!5e0!3m2!1sen!2sin!4v1716274155126!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="d-flex w-100 flex-column justify-content-center align-items-center mt-4 mb-5">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="d-flex flex-column justify-content-center align-items-center w-100"
        >
          <input
            type="text"
            name="from_name"
            id="name"
            autoComplete="off"
            required
            placeholder="Enter Your Name"
            className="w-25 py-2 px-3 btn-outline-dark"
          />
          <br />
          <input
            type="email"
            name="from_email"
            id="email"
            required
            autoComplete="off"
            placeholder="Enter Your Email"
            className="w-25 py-2 px-3 btn-outline-dark"
          />
          <div className="d-flex  w-25 pt-3 ms-1 ">
            <div>
              <label htmlFor="from_city" style={{ color: "gray" }}>
                Select Your City:
              </label>
              &nbsp;
              <input
                type="radio"
                name="from_city"
                value="India"
                id="from_india"
                required
              />
              &nbsp;
              <label htmlFor="from_india" style={{ color: "gray" }}>
                India
              </label>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <input
                type="radio"
                name="from_city"
                value="USA"
                id="from_usa"
                required
              />
              &nbsp;
              <label htmlFor="from_usa" style={{ color: "gray" }}>
                USA
              </label>
            </div>
          </div>
          <div className="d-flex w-25 pt-3 pb-3 ms-1">
            <label htmlFor="select" style={{ color: "gray" }}>
              Search Language
            </label>
            &nbsp;
            <select
              className="w-25"
              name="select"
              id="select"
              style={{ color: "gray" }}
              required
            >
              <option style={{ color: "gray" }} value="English">
                English
              </option>
              <option style={{ color: "gray" }} value="Hindi">
                Hindi
              </option>
              <option style={{ color: "gray" }} value="Gujarati">
                Gujarati
              </option>
            </select>
          </div>
          {/* <br/> */}
          <textarea
            name="message"
            id="message"
            placeholder="Enter Your Message"
            className="w-25 py-2 px-3 btn-outline-dark"
            required
            autoComplete="off"
            rows={4}
          ></textarea>

          <div className="d-flex flex-column  w-25 pt-3  ms-1">
            <label htmlFor="right_time" style={{ color: "gray" }}>
              Is this the right time to talk with you?
            </label>
            <div className="mt-2">
              <label htmlFor="right_time_yes" style={{ color: "gray" }}>
                Yes
              </label>
              &nbsp;
              <input
                type="radio"
                name="right_time"
                value="Yes ✅"
                id="right_time_yes"
                required
              />{" "}
              &nbsp;&nbsp;
              <label
                htmlFor="right_time_no"
                className="me-1"
                style={{ color: "gray" }}
              >
                No
              </label>
              <input
                type="radio"
                name="right_time"
                value="No ❎"
                id="right_time_no"
                required
              />
            </div>
          </div>
          <ReCAPTCHA
            sitekey="6Lez6uYpAAAAAB9Aq0W8JuNTzaHqCeXBHvUMyNfn"
            onChange={handleRecaptchaChange}
            className="ReCAPTCHA"
            ref={recaptchaRef}
          />
          <button
            type="submit"
            className="mt-3 me-5 px-5 py-2 border-0 rounded-1 fw-semibold sendBtn"
            style={{
              backgroundColor: "#4237a1",
              color: "white",
              letterSpacing: "2px",
              outline: "none",
            }}
          >
            SEND
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
