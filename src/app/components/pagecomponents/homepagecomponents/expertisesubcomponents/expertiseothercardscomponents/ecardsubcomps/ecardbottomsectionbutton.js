import Link from "next/link";

export default function EcardBottomSectionButton() {
  return (
    <div className="expertisecard-card-collection-bottomsection-button-container">
      <Link
        href="/services"
        className="general-linkage"
        title="get more details"
      >
        <button className="expertisecard-card-collection-bottomsection-button font-nunito">
          DETAILS
        </button>
      </Link>
    </div>
  );
}
