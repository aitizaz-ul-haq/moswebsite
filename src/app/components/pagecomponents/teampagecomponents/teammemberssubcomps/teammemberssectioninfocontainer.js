export default function TeamMembersSectionInfoContainer({memeberheading, memberdesignation}) {
    return(
        <div className="teammemebers-section-info-container">
            <h4 className="teammemebers-section-name font-poppins">
              {memeberheading}
            </h4>
            <p className="teammemebers-section-designation font-nunito">
              {memberdesignation}
            </p>
          </div>
    );
}