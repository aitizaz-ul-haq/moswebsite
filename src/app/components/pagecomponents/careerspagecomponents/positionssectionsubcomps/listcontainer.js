import ListContainerLeftSection from "./listcontainerleftsection";
import ListContainerRightSection from "./listcontainerrightsection";

export default function ListContainer({ PositionsSectionData }) {
  return (
    <div className="positions-section-list-container">
      <ListContainerLeftSection PositionsSectionData={PositionsSectionData} />
      <ListContainerRightSection PositionsSectionData={PositionsSectionData} />
    </div>
  );
}
