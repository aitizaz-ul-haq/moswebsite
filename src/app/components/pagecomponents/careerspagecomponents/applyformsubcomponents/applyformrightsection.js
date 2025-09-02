"use client";
import { useState } from "react";

export default function ApplyFormRightSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setSuccess("Application submitted successfully!");
        e.target.reset();
      } else {
        setSuccess("Failed to submit application.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setSuccess("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="applyform-right-section">
      <form className="contact-applyform" onSubmit={handleSubmit}>
        <div className="applyform-row">
          <div className="applyform-group first-name">
            <label htmlFor="name" className="applyform-label font-poppins">
              Name
            </label>
            <input type="text" id="name" name="name" className="applyform-input" required />
          </div>
        </div>

        <div className="applyform-row">
          <div className="applyform-group email">
            <label htmlFor="email" className="applyform-label font-poppins">
              Email
            </label>
            <input type="email" id="email" name="email" className="applyform-input" required />
          </div>
        </div>

        <div className="applyform-row">
          <div className="applyform-group phone">
            <label htmlFor="phone" className="applyform-label font-poppins">
              Phone
            </label>
            <input type="tel" id="phone" name="phone" className="applyform-input" required />
          </div>
        </div>

        <div className="applyform-row">
          <div className="applyform-group address">
            <label htmlFor="address" className="applyform-label font-poppins">
              Address
            </label>
            <input type="text" id="address" name="address" className="applyform-input" required />
          </div>
        </div>

        <div className="applyform-row">
          <div className="applyform-group position-applied">
            <label htmlFor="position" className="applyform-label font-poppins">
              Position Applied For
            </label>
            <select id="position" name="position" className="applyform-input font-nunito" required>
              <option value="">Select Position</option>
              <option value="Data-Analyst">Data Analyst</option>
              <option value="IT-Support-Analyst-Level-3">IT Support Analyst Level 3</option>
              <option value="Operations-Analyst">Operations Analyst</option>
            </select>
          </div>
        </div>

        <div className="applyform-row">
          <div className="applyform-group resume full-width">
            <label htmlFor="resume" className="applyform-label font-poppins">
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="applyform-input"
              accept=".pdf,.doc,.docx,.rtf"
              required
            />
          </div>
        </div>

        <div className="applyform-row">
          <div className="applyform-group message full-width">
            <label htmlFor="message" className="applyform-label font-poppins">
              Message
            </label>
            <textarea id="message" name="message" rows="5" className="applyform-textarea" required></textarea>
          </div>
        </div>

        <div className="applyform-row button-row">
          <button type="submit" className="applyform-submit-button font-nunito" disabled={loading}>
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </div>

        {success && <p className="form-status">{success}</p>}
      </form>
    </div>
  );
}
