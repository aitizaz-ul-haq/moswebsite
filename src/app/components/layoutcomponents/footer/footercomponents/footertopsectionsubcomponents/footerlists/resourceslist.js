import Link from "next/link";

export default function ResourceList({ resourceslistdata, uid = "" }) {
  const headingId =
    (resourceslistdata.id || resourceslistdata.slug || `resources${uid}`) + "-heading";

  return (
    <div className="footer-lists">
      <h3 id={headingId} className="resources-title font-poppins">
        {resourceslistdata.resourceslisttitle}
      </h3>

      <ul className="footer-lists" aria-labelledby={headingId}>
        {resourceslistdata.resourceslistitems.map((item, index) => (
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
