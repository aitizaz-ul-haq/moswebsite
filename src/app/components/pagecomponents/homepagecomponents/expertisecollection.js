import "../styles/expertisecollection.css";
import ExpertiseCardSection from "./expertisesubcomponents/expertisecardsection";

export default function ExpertiseCollection({ cards }) {
  return (
    <div className="cardcollection-main-container">
      <ExpertiseCardSection cards={cards} />
    </div>
  );
}
