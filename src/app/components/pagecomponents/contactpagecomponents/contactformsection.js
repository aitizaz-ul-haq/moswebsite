import "./styles/contactformsection.css";
import Image from "next/image";

export default function ContactFormSection() {
  return (
    <div className="contactformsection-container">
      <div className="contactformsection-center-section-container">
        <div className="contactformsection-top-text-section">
          <div className="contactformsection-top-logo-container">
            <Image
              width={240}
              height={190}
              className="contact-form-logo"
              src="/mos_logo.png"
            />
          </div>
          <div className="contactformsection-top-text-container">
            <p className="contactformsection-top-text font-nunito">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
            </p>

            <p className="contactformsection-top-text font-nunito">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
            </p>

            <p className="contactformsection-top-text font-nunito">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's
            </p>
          </div>
        </div>
        <div className="contactformsection-bottom-form-section">
          <div className="contactformsection-bottom-form">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group first-name">
                  <label
                    htmlFor="firstname"
                    className="form-label font-poppins"
                  >
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
                <div className="form-group subject full-width">
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
                <button
                  type="submit"
                  className="form-submit-button font-nunito"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
