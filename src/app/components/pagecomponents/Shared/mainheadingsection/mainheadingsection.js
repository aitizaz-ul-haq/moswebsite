import "../styles/mainheadingsection.css";

export default function MainHeadingSection({
  title,
  tagtext,
  description,
  backgroundImages,
}) {
  return (
    <div
      className="mainheadingsection-wrapper"
      style={{
        "--bg-320": `url(${backgroundImages["320px"]})`,
        "--bg-360": `url(${backgroundImages["360px"]})`,
        "--bg-375": `url(${backgroundImages["375px"]})`,
        "--bg-390": `url(${backgroundImages["390px"]})`,
        "--bg-430": `url(${backgroundImages["430px"]})`,
        "--bg-480": `url(${backgroundImages["480px"]})`,
        "--bg-600": `url(${backgroundImages["600px"]})`,
        "--bg-768": `url(${backgroundImages["768px"]})`,
        "--bg-1024": `url(${backgroundImages["1024px"]})`,
        "--bg-1280": `url(${backgroundImages["1280px"]})`,
        "--bg-1440": `url(${backgroundImages["1440px"]})`,
        "--bg-1600": `url(${backgroundImages["1600px"]})`,
        "--bg-1920": `url(${backgroundImages["1920px"]})`,
        "--bg-2560": `url(${backgroundImages["2560px"]})`,
      }}
    >
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
