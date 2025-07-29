import Link from "next/link";

export default function ResourceList({ resourceslistdata }) {
  return (
    <ul className="footer-lists">
      <h4 className="resources-title font-poppins">
        {resourceslistdata.resourceslisttitle}
      </h4>
      {resourceslistdata.resourceslistitems.map((item, index) => (
        <li key={index} className={`list-items ${item.font}`}>
          <Link href={item.link} className="general-linkage-color" title="details">{item.text}</Link>
        </li>
      ))}
    </ul>
  );
}
