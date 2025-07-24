import Link from "next/link";

export default function TeamCenterButtonContainer() {
    return(
        <div className="teamcenter-button-container">
        <Link href="/contact" className="teamcenter-button font-nunito general-linkage" title="Talk with our experts">
          TALK TO US NOW
        </Link>
      </div>
    );
}