export default function LeftTextSection({ Calltoactiondata }) {
  return (
    <div className="calltoaction-left-text-section">
      <div className="calltoaction-heading font-poppins">
        {Calltoactiondata.calltoactionheading}
      </div>
      <div className="calltoaction-description font-nunito">
        {Calltoactiondata.calltoactiondescription}
      </div>
    </div>
  );
}
