import Link from "next/link";

export default function EssentialLinksList({ essentialLinkslistdata, uid = "" }) {
  const headingId =
    (essentialLinkslistdata.id || essentialLinkslistdata.slug || `essential${uid}`) + "-heading";

  return (
    <div className="footer-lists">
      <h3 id={headingId} className="essential-links-title font-poppins">
        {essentialLinkslistdata.essentialLinkslisttitle}
      </h3>

      <ul className="footer-lists" aria-labelledby={headingId}>
        {essentialLinkslistdata.essentialLinkslistitems.map((item, index) => (
          <li key={index} className={`list-items ${item.font}`}>
            <Link href={item.link} className="general-linkage-color">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
