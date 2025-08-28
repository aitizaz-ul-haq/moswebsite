import Image from "next/image";

export default function TeamMembersSectionImageContainer({
  memberpic,
  membername,
  picwidth,
  picheight,
}) {
  return (
    <div className="teammemebers-section-image-container">
      <Image
        src={memberpic}
        width={picwidth}
        height={picheight}
        alt={membername}
      />
    </div>
  );
}
