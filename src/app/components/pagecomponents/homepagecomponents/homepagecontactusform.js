import "./styles/homepagecontactusform.css";
export default function HomePageContactUsForm() {
  return (
    <div className="homecontactform-container">
      {/* <div className="homecontactform-left-section">
       
      </div> */}
      <div className="homecontactform-right-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.337135213221!2d73.074280!3d33.667423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfac6dfd6e7cb3%3A0x9f4b529ec8f538b2!2sVista+Tower%2C+M39G%2B83%2C+I-8+Markaz%2C+I+8+Markaz+I-8%2C+Islamabad%2C+Pakistan!5e0!3m2!1sen!2sus!4v1649071575032!5m2!1sen!2sus"
          className="map-iframe"
          // allowfullscreen=""
          loading="lazy"
        ></iframe>
        <form className="contact-homecontactform">
          <div className="homecontactform-row">
            <div className="homecontactform-group first-name">
              <label
                htmlFor="firstname"
                className="homecontactform-label font-poppins"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="homecontactform-input"
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
