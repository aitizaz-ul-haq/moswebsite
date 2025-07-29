import Link from "next/link";

export default function FooterTopRightSection({ footerdata }) {
  return (
    <div className="footer-top-rightsection">
      {/* <h4 className="footer-top-heading font-poppins">Contact Us Now</h4> */}

      <Link
        href="/contact"
        className="input-footer general-linkage font-poppins"
        title="Connect with us now"
      >
        Contact Us Now
      </Link>
    </div>
  );
}
