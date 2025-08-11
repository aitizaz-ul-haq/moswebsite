import Image from "next/image";

export default function MthCardMagesSection({ image }) {
  return (
    <>
      <Image
        src={image}
        className="typeoneadv-numbers"
        width={1720}
        height={1720}
        alt="numeric_value-icons"
      />
    </>
  );
}
