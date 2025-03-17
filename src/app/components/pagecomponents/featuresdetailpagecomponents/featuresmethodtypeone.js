import "./styles/featuresmethodtypeone.css";
import FeaturesMethodCardSection from "./featuresmethodonesubcomponents/featuresmethodcardsection";

export default function FeaturesMethodTypeOne({ cards }) {
  return (
    <div className="featuresmethod-cardcollection-main-container">
      <FeaturesMethodCardSection cards={cards} />
    </div>
  );
}
