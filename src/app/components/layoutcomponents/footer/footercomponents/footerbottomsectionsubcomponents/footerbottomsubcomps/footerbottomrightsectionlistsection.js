import Image from "next/image";
import Link from "next/link";

export default function FooterBottomRightSectionListsection({ footerdata }) {
  return (
    <div className="footer-bottom-rightsection-listsection">
      {/* Loop through industries list */}
      {footerdata?.footer?.industries?.map((industry, index) => (
        <div key={index} className={`footer-list-${index + 1}`}>
          <Image
            className="footer-bottom-industries-icon"
            width={industry.icon.width}
            height={industry.icon.height}
            src={industry.icon.src}
            alt={industry.icon.alt}
          />
          <ul className="footer-bottom-list-settings">
            <h4 className="resources-title font-poppins">{industry.title}</h4>
            {industry.items.map((item, itemIndex) => (
              <li key={itemIndex} className={`list-items ${item.font}`}>
                <Link
                  href={item.link || "/industries"}
                  className="list-items general-linkage-color"
                  title={`Go to ${item.text}`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
