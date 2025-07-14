import Image from "next/image";
import teammembersdata from "@/app/data/teamdata/dicteamdata.json";
import "./styles/teammemberssection.css";

export default function TeamMemebersSection() {
  const membersArray = Object.values(teammembersdata);

  return (
    <div className="teammemebers-section-container">
      <div className="teammemebers-section-card-container">
        {membersArray.map((member, index) => (
          <div className="teammembers-section-card" key={index}>
            <div className="teammemebers-section-image-container">
              <Image
                src={member.memeberpic}
                width={220}
                height={220}
                alt={member.name}
              />
            </div>
            <div className="teammemebers-section-info-container">
              <h4 className="teammemebers-section-name font-poppins">{member.name}</h4>
              <p className="teammemebers-section-designation font-nunito">
                {member.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
