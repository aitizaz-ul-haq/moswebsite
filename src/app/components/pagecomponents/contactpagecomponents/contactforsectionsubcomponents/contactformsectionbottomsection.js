"use client";
import { useState } from "react";

export default function ContactFormSectionBottomSection() {
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
    <div className="contactformsection-bottom-form-section">
      <div className="contactformsection-bottom-form">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group first-name">
              <label htmlFor="firstname" className="form-label font-poppins">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="form-input"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group last-name">
              <label htmlFor="lastname" className="form-label font-poppins">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form-input"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group email">
              <label htmlFor="email" className="form-label font-poppins">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group phone">
              <label htmlFor="phone" className="form-label font-poppins">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group company">
              <label htmlFor="company" className="form-label font-poppins">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group subject full-width">
              <label htmlFor="subject" className="form-label font-poppins">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group message full-width">
              <label htmlFor="message" className="form-label font-poppins">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <div className="form-row button-row">
            <button type="submit" className="form-submit-button font-nunito">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
