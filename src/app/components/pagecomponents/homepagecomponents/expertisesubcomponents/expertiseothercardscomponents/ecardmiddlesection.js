import Image from "next/image";

export default function EcardMiddleSection({ card }) {
  return (
    <div className="expertisecard-card-collection-middlesection-container">
      <div className="expertisecard-card-collection-image-container">
        <Image
          className="expertisecard-card-collection-middle-image"
          width={290}
          height={320}
          src={`/${card.image}`}
          alt="Card Icon"
        />
      </div>
    </div>
  );
}
