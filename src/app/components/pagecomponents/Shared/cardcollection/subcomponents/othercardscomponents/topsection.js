export default function TopSection({ card }) {
  return (
    <div className="card-collection-topsection-container">
      <p className="card-collection-first-text font-poppins">
        {card.firsttext}
      </p>
      <p className="card-collection-second-text font-nunito">
        {card.secondtext}
      </p>
    </div>
  );
}
