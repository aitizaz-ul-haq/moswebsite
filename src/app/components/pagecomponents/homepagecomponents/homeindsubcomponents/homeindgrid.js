import Image from "next/image";

export default function HomeIndGrid({ Homeindustriessectiondata }) {
  let industriesicons = Homeindustriessectiondata.industriesicons;
  return (
    <div className="homepage-industries-grid">
      {industriesicons.map((ind, index) => {
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
                alt="homepage_industries"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
