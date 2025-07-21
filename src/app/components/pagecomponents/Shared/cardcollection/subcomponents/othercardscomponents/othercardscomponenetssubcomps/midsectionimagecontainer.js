import Image from "next/image";

export default function MidSectionImageContainer({ carimage }) {
  return (
    <div className="card-collection-image-container">
      <Image
        className="card-collection-middle-image"
        width={290}
        height={320}
        src={`/${carimage}`}
        alt="Card Icon"
      />
    </div>
  );
}
