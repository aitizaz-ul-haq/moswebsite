export default function TeamMembersSectionInfoContainer({memeberheading, memberdesignation}) {
    return(
        <div className="teammemebers-section-info-container">
            <h3 className="teammemebers-section-name font-poppins">
              {memeberheading}
            </h3>
            <p className="teammemebers-section-designation font-nunito">
              {memberdesignation}
            </p>
          </div>
    );
}