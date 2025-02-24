import Image from "next/image";

export default function ListContainerLeftSection({ PositionsSectionData }) {
  let positionbannerlink = PositionsSectionData.positionsbanner.bannerlink;
  return (
    <div className="positions-section-leftsection">
      <Image
        className="positionsbanner"
        src={positionbannerlink}
        width={945}
        height={945}
      />
    </div>
  );
}
