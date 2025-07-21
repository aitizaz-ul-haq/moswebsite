import MidSectionImageContainer from "./othercardscomponenetssubcomps/midsectionimagecontainer";

export default function MiddleSection({ card }) {
  return (
    <div className="card-collection-middlesection-container">
      <MidSectionImageContainer carimage={card.image} />
    </div>
  );
}
