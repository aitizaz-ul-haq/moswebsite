import Image from "next/image";

export default function FooterBottomRightSection({ footerdata }) {
  return (
    <div className="footer-bottom-rightsection">
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
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* License section */}
      <div className="footer-bottom-rightsection-licensesection">
        <p className="footer-bottom-liscense font-nunito">
          {footerdata?.footer?.license?.text ||
            "License information not available."}
        </p>
      </div>
    </div>
  );
}
