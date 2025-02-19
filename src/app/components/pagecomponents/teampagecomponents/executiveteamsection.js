import "./styles/executiveteamsection.css";
import MobileRow from "./executiveteamsectionsubcomponents/mobilerow";
import OtherRow from "./executiveteamsectionsubcomponents/otherrow";

export default function ExecutiveTeamSection({ executivecards }) {
  return (
    <div className="teamcards-container">
      <MobileRow executivecards={executivecards} />
      <OtherRow executivecards={executivecards} />
    </div>
  );
}
