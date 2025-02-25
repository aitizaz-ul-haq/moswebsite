import "../styles/calltoaction.css";

export default function CallToAction() {
  return (
    <div className="calltoaction-container">
      <div className="calltoaction-left-text-section">
        <div className="calltoaction-heading font-poppins">
          Take the next step toward transforming your vision into reality
        </div>
        <div className="calltoaction-description font-nunito">
          Connect with us today to unlock tailored solutions, unmatched
          expertise, and a partnership dedicated to your success
        </div>
      </div>
      <div className="calltoaction-right-button-section">
        <button className="calltoaction-button font-nunito">CONTACT US</button>
      </div>
    </div>
  );
}
