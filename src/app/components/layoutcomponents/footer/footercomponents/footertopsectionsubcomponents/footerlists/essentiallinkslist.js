import Link from "next/link";

export default function EssentialLinksList({ essentialLinkslistdata }) {
  const headingId =
    (essentialLinkslistdata.id || essentialLinkslistdata.slug || "essential-links") +
    "-heading";

  return (
    <ul className="footer-lists" aria-labelledby={headingId}>
      {/* Heading inside an <li> with role="presentation" so it's not counted as a list item */}
      <li role="presentation" className="essential-links-title font-poppins" style={{ listStyle: "none" }}>
        <h4 id={headingId} className="essential-links-title font-poppins">
          {essentialLinkslistdata.essentialLinkslisttitle}
        </h4>
      </li>

      {essentialLinkslistdata.essentialLinkslistitems.map((item, index) => (
        <li key={index} className={`list-items ${item.font}`}>
          <Link
            href={item.link}
            className="general-linkage-color"
            title="explore more"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
