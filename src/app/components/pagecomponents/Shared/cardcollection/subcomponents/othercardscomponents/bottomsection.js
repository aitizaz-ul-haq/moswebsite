export default function BottomSection({ card }) {
  return (
    <div className="card-collection-bottomsection-container">
      <p className="card-collection-bottom-text font-nunito">
        {card.bottomtext}
      </p>
    </div>
  );
}
