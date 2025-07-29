import Link from "next/link";

export default function EssentialLinksList({ essentialLinkslistdata }) {
  return (
    <ul className="footer-lists">
      <h4 className="essential-links-title font-poppins">
        {essentialLinkslistdata.essentialLinkslisttitle}
      </h4>
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
