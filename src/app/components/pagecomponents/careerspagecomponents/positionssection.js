import "./styles/positionssection.css";
import ListContainer from "./positionssectionsubcomps/listcontainer";

export default function PositionsSections({ PositionsSectionData }) {
  return (
    <div className="positions-section-container">
      <ListContainer PositionsSectionData={PositionsSectionData} />
    </div>
  );
}
