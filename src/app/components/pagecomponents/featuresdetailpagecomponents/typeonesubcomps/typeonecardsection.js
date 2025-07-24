import "../styles/typeonecardsection.css";
import TypeOneCardSect from "./typeonecardsect";
import TypeOneCardTextContainer from "./typeonecardtextcontainer";

export default function TypeOneCardSection({
  cards,
  Solutionscardstitle,
  Solutionscardsdescriptions,
}) {
  return (
    <div className="typeonecard-main-container">
      <TypeOneCardTextContainer
        Solutionscardstitle={Solutionscardstitle}
        Solutionscardsdescriptions={Solutionscardsdescriptions}
      />
      <TypeOneCardSect cards={cards} />
    </div>
  );
}
