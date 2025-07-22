import Link from "next/link";

export default function FeaturesButtonSection() {
  return (
    <div className="featuresright-button-container">
      <Link className="featuresright-button font-nunito general-linkage" href="/contact" title="lets talk more">
        TALK TO US NOW
      </Link>
    </div>
  );
}
