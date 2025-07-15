import Image from "next/image";

export default function TeamMembersSectionImageContainer({
  memberpic,
  membername,
}) {
  return (
    <div className="teammemebers-section-image-container">
      <Image src={memberpic} width={220} height={220} alt={membername} />
    </div>
  );
}
