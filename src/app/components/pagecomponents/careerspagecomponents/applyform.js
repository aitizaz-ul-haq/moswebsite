import "./styles/applyform.css";
import Image from "next/image";

export default function ApplyForm() {
  return (
    <div className="applyform-container">
      <div className="applyform-left-section">
        <div className="applyform-left-logo-container">
          <Image
            src="/mos_logo.png"
            className="applyform-logo"
            width={270}
            height={200}
          />
        </div>
        <div className="applyform-left-title font-poppins">
          Job Application Instructions
        </div>
        <div className="applyform-left-instructions-container">
          <div className="instruction-point font-nunito">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </div>
          <div className="instruction-point font-nunito">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </div>
          <div className="instruction-point font-nunito">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
          </div>
          <div className="instruction-point font-nunito">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's
          </div>
          <div className="instruction-point font-nunito">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
          </div>
        </div>
      </div>
      <div className="form-right-section">
        <form className="contact-form">
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
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group last-name">
              <label htmlFor="lastname" className="form-label font-poppins">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form-input"
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
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group phone">
              <label htmlFor="phone" className="form-label font-poppins">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
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
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group subject">
              <label htmlFor="subject" className="form-label font-poppins">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
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
