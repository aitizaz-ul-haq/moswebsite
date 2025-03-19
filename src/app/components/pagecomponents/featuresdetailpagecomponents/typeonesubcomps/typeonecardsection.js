import "../styles/typeonecardsection.css";
import TypeOneCardSect from "./typeonecardsect";
export default function TypeOneCardSection({
  cards,
  Solutionscardstitle,
  Solutionscardsdescriptions,
}) {
  return (
    <div className="typeonecard-main-container">
      <div className="typeonecard-text-container">
        <div className="typeonecard-text-block">
          <div className="typeonecard-tag font-poppins">
            {Solutionscardstitle}
          </div>
          <div className="typeonecard-description font-nunito">
            {Solutionscardsdescriptions}
          </div>
        </div>
      </div>
      <TypeOneCardSect cards={cards} />
    </div>
  );
}
