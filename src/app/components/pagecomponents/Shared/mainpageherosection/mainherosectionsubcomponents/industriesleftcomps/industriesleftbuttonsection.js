import Link from "next/link";

export default function IndustriesLeftButtonSection() {
  return (
    <div className="industriesleft-button-container">
      <Link href="/contact" className="industriesleft-button font-nunito general-linkage" title="Connect with us">
        TALK TO US NOW
      </Link>
    </div>
  );
}
