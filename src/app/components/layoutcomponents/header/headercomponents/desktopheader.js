import HeaderLeftSection from "./headerleftsection";
import HeaderRightSection from "./headerrightsection";
import HeaderContactButton from "@/app/components/uicomponents/buttons/headercontactbutton";

export default function DesktopHeader({ isScrolled }) {
  return (
    <div className={`header-main-container ${isScrolled ? "scrolled" : ""}`}>
      <HeaderLeftSection />
      <HeaderRightSection />
      <HeaderContactButton name="CONTACT US" link="/contact" />
    </div>
  );
}
