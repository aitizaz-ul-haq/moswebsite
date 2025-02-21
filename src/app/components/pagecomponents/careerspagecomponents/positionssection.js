import "./styles/positionssection.css";
import Image from "next/image";

export default function PositionsSections() {
  return (
    <div className="positions-section-container">
      <div className="positions-section-list-container">
        <div className="positions-section-leftsection">
          <Image
            className="positionsbanner"
            src="/Positions..png"
            width={945}
            height={945}
          />
        </div>
        <div className="positions-section-rightsection">
          <div className="positions-section-list">
            <div className="top-position">
              <div className="position-left-section">
                <h3 className="position-heading font-poppins">
                  IT Support Analyst
                </h3>
                <p className="position-description font-nunito">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries
                </p>
              </div>
              <div className="position-right-section">
                <button className="positions-details-button font-nunito">
                  DETAILS
                </button>
              </div>
            </div>

            <div className="mid-position">
              <div className="position-left-section">
                <h3 className="position-heading font-poppins">Data Analyst</h3>
                <p className="position-description font-nunito">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries
                </p>
              </div>
              <div className="position-right-section">
                <button className="positions-details-button font-nunito">
                  DETAILS
                </button>
              </div>
            </div>

            <div className="bottom-position">
              <div className="position-left-section">
                <h3 className="position-heading font-poppins">
                  Operations Analyst
                </h3>
                <p className="position-description font-nunito">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries
                </p>
              </div>
              <div className="position-right-section">
                <button className="positions-details-button font-nunito">
                  DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
