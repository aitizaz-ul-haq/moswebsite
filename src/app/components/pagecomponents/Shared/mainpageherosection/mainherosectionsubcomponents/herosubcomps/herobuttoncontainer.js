import Link from "next/link";

export default function HeroButtonContainer() {
  return (
    <div className="homeright-button-container">
      <Link
        href="/contact"
        className="homeright-button font-nunito general-linkage"
        title="Connect with us now"
      >
        TALK TO US NOW
      </Link>
    </div>
  );
}
