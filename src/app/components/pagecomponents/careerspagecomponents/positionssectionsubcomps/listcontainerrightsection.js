import TopPosition from "./positionscontainers/topposition";
import MidPosition from "./positionscontainers/midposition";
import BottomPosition from "./positionscontainers/bottomposition";

export default function ListContainerRightSection({ PositionsSectionData }) {
  let toppositiondata = PositionsSectionData.toppositiondata;
  let midpositiondata = PositionsSectionData.midpositiondata;
  let bottompositiondata = PositionsSectionData.bottompositiondata;

  return (
    <div className="positions-section-rightsection">
      <div className="positions-section-list">
        <TopPosition toppositiondata={toppositiondata} />
        <MidPosition midpositiondata={midpositiondata} />
        <BottomPosition bottompositiondata={bottompositiondata} />
      </div>
    </div>
  );
}
