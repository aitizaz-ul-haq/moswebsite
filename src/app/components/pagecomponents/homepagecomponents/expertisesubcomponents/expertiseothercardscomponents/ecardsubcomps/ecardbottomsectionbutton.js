import Link from "next/link";

export default function EcardBottomSectionButton() {
  return (
    <div className="expertisecard-card-collection-bottomsection-button-container">
      <Link
        href="/services"
        className="expertisecard-card-collection-bottomsection-button font-nunito general-linkage"
        title="get more details"
      >
        {/* <button className=""> */}
          DETAILS
        {/* </button> */}
      </Link>
    </div>
  );
}
