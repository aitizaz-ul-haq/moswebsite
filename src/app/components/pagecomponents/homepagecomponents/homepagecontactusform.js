"use client";

import "./styles/homepagecontactusform.css";
import { useState } from "react";
export default function HomePageContactUsForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        alert(result.error || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="homecontactform-container">
      {/* <div className="homecontactform-left-section">
       
      </div> */}
      <div className="homecontactform-right-section">
        <iframe
          title="google-maps"
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13274.56918770648!2d73.0745194!3d33.6676645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df954370c0617b%3A0x88947e846dd351fb!2sVista%20Tower%20Pakland%2C%20I-8%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1720172940000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <form className="contact-homecontactform" onSubmit={handleSubmit}>
          <div className="homecontactform-row">
            <div className="homecontactform-group first-name">
              <label
                htmlFor="firstname"
                className="homecontactform-label font-poppins"
              >
                First Name
              </label>
              <input
                className="homecontactform-input"
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="homecontactform-group first-name">
              <label
                htmlFor="lastname"
                className="homecontactform-label font-poppins"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="homecontactform-input"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="homecontactform-row">
            <div className="homecontactform-group email">
              <label
                htmlFor="email"
                className="homecontactform-label font-poppins"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="homecontactform-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="homecontactform-group phone">
              <label
                htmlFor="phone"
                className="homecontactform-label font-poppins"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="homecontactform-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="homecontactform-row">
            <div className="homecontactform-group address">
              <label
                htmlFor="subject"
                className="homecontactform-label font-poppins"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="homecontactform-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="homecontactform-row">
            <div className="homecontactform-group message full-width">
              <label
                htmlFor="message"
                className="homecontactform-label font-poppins"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="homecontactform-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="homecontactform-row button-row">
            <button
              type="submit"
              className="homecontactform-submit-button font-nunito"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
