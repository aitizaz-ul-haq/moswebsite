import Image from "next/image";

export default function ServicesAdvSideBySideRightSection({ itemspoints }) {
  return (
    <div className="advantages-sidebyside-rightsection">
      <div className="advantages-list-container">
        {itemspoints.map((item, index) => {
          return (
            <div className="advantages-list-item" key={index}>
              <Image
                src="/advantages-bullet.png"
                className="listitem-bullet"
                width={20}
                height={20}
              />
              <p className="advantages-text-point font-nunito">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
