import "./styles/homeindustriessection.css";
import Image from "next/image";

export default function HomeIndustriesSection({ Homeindustriessectiondata }) {
  let industriesicons = Homeindustriessectiondata.industriesicons;
  return (
    <div className="homepage-industries-section-container">
      <div className="homepage-industries-section-text-container">
        <div className="homepage-industries-tag font-poppins">
          {Homeindustriessectiondata.homeindustriesheading}
        </div>
        <p className="homepage-industries-text font-poppins">
          {Homeindustriessectiondata.homeindustriesdescription}
        </p>
        <div className="homepage-industries-grid">
          {industriesicons.map((ind, index) => {
            // Conditionally apply the class based on odd or even index
            const iconClass = index % 2 !== 0 ? "odd-icon" : "even-icon";
            return (
              <div
                key={ind.id}
                className={`homepage-industries-icongrid-container ${iconClass}`}
              >
                <div className="homepage-industries-icon">
                  <Image
                    className="homepage-industries-icons"
                    width={100}
                    height={100}
                    src={ind.iconname}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
