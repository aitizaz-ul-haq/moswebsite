import "../styles/cardcollection.css";
import CardSection from "./subcomponents/cardsection";

export default function CardCollection({ cards }) {
  return (
    <div className="cardcollection-main-container">
      <CardSection cards={cards} />
    </div>
  );
}
