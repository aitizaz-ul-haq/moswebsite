import "./styles/featuresright.css";

export default function HomeRight({ title, paragraph }) {
  return (
    <div className="featuresright-text-wrapper">
      <div className="featuresright-text-container">
        <div className="featuresright-title-container">
          <h1 className="featuresright-title font-poppins">{title}</h1>
        </div>
        <div className="featuresright-paragraph-container">
          <p className="featuresright-paragraph font-nunito">{paragraph}</p>
        </div>
        <div className="featuresright-button-container">
          <button className="featuresright-button font-nunito">
            TALK TO US NOW
          </button>
        </div>
      </div>
    </div>
  );
}
