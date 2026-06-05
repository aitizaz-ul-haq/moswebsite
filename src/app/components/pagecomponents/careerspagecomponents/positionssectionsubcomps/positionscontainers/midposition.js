"use client";
import { useState } from "react";
import JobDetailsModal from "../../jobdetailmodal/jobdetailmodal";

export default function MidPosition({ midpositiondata }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mid-position">
        <div className="position-left-section">
          <h3 className="position-heading font-poppins">
            {midpositiondata.title}
          </h3>
          <p className="position-description font-nunito">
            {midpositiondata.descriptionbrief}
          </p>
        </div>
        <div className="position-right-section">
          <button
            className="positions-details-button font-nunito"
            onClick={() => setIsOpen(true)}
          >
            DETAILS
          </button>
        </div>
      </div>

      <JobDetailsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        job={midpositiondata}
      />
    </>
  );
}
