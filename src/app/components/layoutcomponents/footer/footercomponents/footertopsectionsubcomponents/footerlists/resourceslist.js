import Link from "next/link";

export default function ResourceList({ resourceslistdata }) {
  const headingId =
    (resourceslistdata.id || resourceslistdata.slug || "resources") + "-heading";

  return (
    <ul className="footer-lists" aria-labelledby={headingId}>
      <li role="presentation" className="resources-title font-poppins" style={{ listStyle: "none" }}>
        <h4 id={headingId} className="resources-title font-poppins">
          {resourceslistdata.resourceslisttitle}
        </h4>
      </li>

      {resourceslistdata.resourceslistitems.map((item, index) => (
        <li key={index} className={`list-items ${item.font}`}>
          <Link href={item.link} className="general-linkage-color">
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
