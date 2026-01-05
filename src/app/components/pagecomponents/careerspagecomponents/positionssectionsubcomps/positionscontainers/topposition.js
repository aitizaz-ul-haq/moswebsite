"use client";
import { useState } from "react";
import JobDetailsModal from "../../jobdetailmodal/jobdetailmodal";

export default function TopPosition({ toppositiondata }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="top-position">
        <div className="position-left-section">
          <h3 className="position-heading font-poppins">
            {toppositiondata.title}
          </h3>
          <p className="position-description font-nunito">
            {toppositiondata.descriptionbrief}
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
        job={toppositiondata}
      />
    </>
  );
}
