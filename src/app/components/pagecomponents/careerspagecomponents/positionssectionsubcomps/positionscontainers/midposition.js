export default function MidPosition({ midpositiondata }) {
  return (
    <div className="mid-position">
      <div className="position-left-section">
        <h3 className="position-heading font-poppins">
          {midpositiondata.title}
        </h3>
        <p className="position-description font-nunito">
          {midpositiondata.description}
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
