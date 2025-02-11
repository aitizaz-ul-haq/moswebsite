"use client";

import Link from "next/link";
import headerButtons from "../headerdata/headerButtons.json";
import { useState } from "react";

export default function HeaderRightSectionButtonSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {headerButtons.map((button, index) => (
        <div
          key={index}
          className="header-button-wrapper"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link
            style={{ textDecoration: "none" }}
            href={button.link}
            className="header-nobackground-button font-nunito"
          >
            {button.name}
          </Link>

          {/* Subpages Dropdown */}
          {button.subpages && hoveredIndex === index && (
            <div className="header-dropdown-menu">
              {button.subpages.map((subpage, subIndex) => (
                <Link
                  key={subIndex}
                  href={subpage.link} // Use the link directly
                  passHref
                  className="header-dropdown-item font-nunito"
                >
                  {subpage.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
