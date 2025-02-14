import "../styles/mainheadingsection.css";

export default function MainHeadingSection({ title, tagtext, description }) {
  return (
    <div className="mainheadingsection-wrapper">
      <div className="mainheadingsection-container">
        <div className="mainheadingsection-title-container">
          <h2 className="mainheadingsection-title font-poppins">{title}</h2>
        </div>
        <div className="mainheadingsection-lowersection-container">
          <div className="mainheadingsection-tex-container">
            <div className="mainheadingsection-tag font-poppins">{tagtext}</div>
            <p className="mainpageheadingsection-description font-nunito">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
