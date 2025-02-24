import "./styles/footer.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top-section">
        <div className="footer-top-leftsection">
          <div className="footer-top-leftsection-upper-section">
            <div className="footer-logo-container">
              <Image
                className="footer-logo-container"
                width={1922}
                height={1922}
                src="/mos_website.png"
              />
            </div>
            <div className="footer-description-container">
              <p className="footer-description font-nunito">
                Connect with us today to unlock tailored solutions, unmatched
                expertise, and a partnership dedicated to your success
              </p>
            </div>
          </div>
          <div className="footer-top-leftsection-lower-section">
            <div className="footer-linklist-container">
              <ul className="footer-lists">
                <h4 className="resources-title font-poppins">Resources</h4>
                <li className="list-items font-nunito">Case Studies</li>
                <li className="list-items font-nunito">Whitepapers</li>
                <li className="list-items font-nunito">eBooks</li>
                <li className="list-items font-nunito">Webinars</li>
                <li className="list-items font-nunito">Tutorials</li>
                <li className="list-items font-nunito">Community Forum</li>
              </ul>

              <ul className="footer-lists">
                <h4 className="support-title font-poppins">Support</h4>
                <li className="list-items font-nunito">Help Center</li>
                <li className="list-items font-nunito">Customer Support</li>
                <li className="list-items font-nunito">Privacy Policy</li>
                <li className="list-items font-nunito">Terms & Conditions</li>
                <li className="list-items font-nunito">Refund Policy</li>
                <li className="list-items font-nunito">
                  Accessibility Statement
                </li>
              </ul>

              <ul className="footer-lists">
                <h4 className="essential-links-title font-poppins">
                  Essential Links
                </h4>
                <li className="list-items font-nunito">Homes</li>
                <li className="list-items font-nunito">About Us</li>
                <li className="list-items font-nunito">Services</li>
                <li className="list-items font-nunito">Contact Us</li>
                <li className="list-items font-nunito">FAQ</li>
                <li className="list-items font-nunito">Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-top-rightsection">
          <h4 className="footer-top-heading font-poppins">Contact Us Now</h4>
          <input className="input-footer" />
        </div>
      </div>
      <div className="footer-bottom-section">
        <div className="footer-bottom-leftsection">
          <h4 className="footer-bottom-leftsection-title font-poppins">
            Follow us
          </h4>
          <div className="footer-bottom-social-icons">
            <Image
              className="footer-social-media-icon"
              width={922}
              height={922}
              src="/footer_facebook.png"
            />
            <Image
              className="footer-social-media-icon"
              width={922}
              height={922}
              src="/footer_youtube.png"
            />
            <Image
              className="footer-social-media-icon"
              width={922}
              height={922}
              src="/footer_instagram.png"
            />
            <Image
              className="footer-social-media-icon"
              width={922}
              height={922}
              src="/footer_twitter.png"
            />
            <Image
              className="footer-social-media-icon"
              width={922}
              height={922}
              src="/footer_linkedin.png"
            />
          </div>
        </div>
        <div className="footer-bottom-rightsection">
          <div className="footer-bottom-rightsection-listsection">
            <div className="footer-list-one">
              <Image
                className="footer-bottom-industries-icon"
                width={22}
                height={22}
                src="/footer_icons_settings.png"
              />
              <ul className="footer-bottom-list-settings">
                <h4 className="resources-title font-poppins">Services</h4>
                <li className="list-items font-nunito">Homes</li>
                <li className="list-items font-nunito">About Us</li>
                <li className="list-items font-nunito">Services</li>
                <li className="list-items font-nunito">Contact Us</li>
                <li className="list-items font-nunito">FAQ</li>
                <li className="list-items font-nunito">Careers</li>
              </ul>
            </div>

            <div className="footer-list-two">
              <Image
                className="footer-bottom-industries-icon"
                width={22}
                height={22}
                src="/footer_icons_industries.png"
              />
              <ul className="footer-bottom-list-settings">
                <h4 className="resources-title font-poppins">Industries</h4>
                <li className="list-items font-nunito">Homes</li>
                <li className="list-items font-nunito">About Us</li>
                <li className="list-items font-nunito">Services</li>
                <li className="list-items font-nunito">Contact Us</li>
                <li className="list-items font-nunito">FAQ</li>
                <li className="list-items font-nunito">Careers</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom-rightsection-licensesection">
            <p className="footer-bottom-liscense font-nunito">
              © 2025 Manage Outsource Services. All Rights Reserved. This
              website and its content, including but not limited to text,
              graphics, logos, and images, are the exclusive property of Manage
              Outsource Services. Unauthorized use, reproduction, or
              distribution of any content from this site without prior written
              permission is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
