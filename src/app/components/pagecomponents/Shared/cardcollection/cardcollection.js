import "../styles/cardcollection.css";
import CardSection from "./subcomponents/cardsection";
import cardData from "@/app/data/shareddata/cardcollectiondata.json"; // Import JSON

export default function CardCollection() {
  const cards = cardData.features.cards; // Extract cards from JSON

  return (
    <div className="cardcollection-main-container">
      <CardSection cards={cards} />
    </div>
  );
}
