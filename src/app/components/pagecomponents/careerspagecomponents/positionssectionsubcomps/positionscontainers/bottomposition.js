export default function BottomPosition({ bottompositiondata }) {
  return (
    <div className="bottom-position">
      <div className="position-left-section">
        <h3 className="position-heading font-poppins">
          {bottompositiondata.title}
        </h3>
        <p className="position-description font-nunito">
          {bottompositiondata.description}
        </p>
      </div>
      <div className="position-right-section">
        <button className="positions-details-button font-nunito">
          DETAILS
        </button>
      </div>
    </div>
  );
}
