import TypeOneCardTextBlock from "./typeonecardtextblock";

export default function TypeOneCardTextContainer({
  Solutionscardstitle,
  Solutionscardsdescriptions,
}) {
  return (
    <div className="typeonecard-text-container">
      <TypeOneCardTextBlock
        Solutionscardstitle={Solutionscardstitle}
        Solutionscardsdescriptions={Solutionscardsdescriptions}
      />
    </div>
  );
}
