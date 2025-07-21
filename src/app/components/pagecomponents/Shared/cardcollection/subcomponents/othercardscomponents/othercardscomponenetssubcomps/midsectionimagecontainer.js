import Image from "next/image";

export default function MidSectionImageContainer({ cardimage }) {
  return (
    <div className="card-collection-image-container">
      <Image
        className="card-collection-middle-image"
        width={290}
        height={320}
        src={`/${cardimage}`}
        alt="Card Icon"
      />
    </div>
  );
}
