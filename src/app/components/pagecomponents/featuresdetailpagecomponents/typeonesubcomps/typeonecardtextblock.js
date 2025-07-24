import TypeOneCardTagHeading from "./typeonecardtagheading";
import TypeOneCardDescription from "./typeonecarddescription";

export default function TypeOneCardTextBlock({
  Solutionscardstitle,
  Solutionscardsdescriptions,
}) {
  return (
    <div className="typeonecard-text-block">
      <TypeOneCardTagHeading Solutionscardstitle={Solutionscardstitle} />
      <TypeOneCardDescription
        Solutionscardsdescriptions={Solutionscardsdescriptions}
      />
    </div>
  );
}
