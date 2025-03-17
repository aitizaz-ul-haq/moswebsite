import Image from "next/image";

export default function MethodeCardMiddleSection({ card }) {
  return (
    <div className="featuresmethod-card-collection-middlesection-container">
      <div className="featuresmethod-card-collection-image-container">
        <Image
          className="featuresmethod-card-collection-middle-image"
          width={290}
          height={320}
          src={`/${card.image}`}
          alt="Card Icon"
        />
      </div>
    </div>
  );
}
