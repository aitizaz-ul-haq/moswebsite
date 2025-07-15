export default function FooterBottonLisenseSection({footerdata}) {
  return (
    <div className="footer-bottom-rightsection-licensesection">
      <p className="footer-bottom-liscense font-nunito">
        {footerdata?.footer?.license?.text ||
          "License information not available."}
      </p>
    </div>
  );
}
