import Image from "next/image";
import Link from "next/link";

export default function FooterBottomRightSectionListsection({ footerdata }) {
  return (
    <div className="footer-bottom-rightsection-listsection">
      {footerdata?.footer?.industries?.map((industry, index) => {
        const headingId = `${(industry?.title || "industry")
          .toLowerCase()
          .replace(/\s+/g, "-")}-${index}-heading`;

        return (
          <div key={index} className={`footer-list-${index + 1}`}>
            <Image
              className="footer-bottom-industries-icon"
              width={industry.icon.width}
              height={industry.icon.height}
              src={industry.icon.src}
              alt={industry.icon.alt}
            />

            <h3 id={headingId} className="resources-title font-poppins">
              {industry.title}
            </h3>

            <ul className="footer-bottom-list-settings" aria-labelledby={headingId}>
              {industry.items.map((item, itemIndex) => (
                <li key={itemIndex} className={`list-items ${item.font}`}>
                  <Link
                    href={item.link || "/industries"}
                    className="general-linkage-color"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
