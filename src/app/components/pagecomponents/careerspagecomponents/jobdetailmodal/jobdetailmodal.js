// components/pagecomponents/careerspagecomponents/JobDetailsModal.js
"use client";
import { useEffect } from "react";
import "./styles/jobdetailmodal.css";

export default function JobDetailsModal({ isOpen, onClose, job }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // lock background scroll
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("job-modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="job-modal-overlay" onClick={handleOverlayClick}>
      <div className="job-modal-container">
        <button className="job-modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Title */}
        <h2 className="job-modal-title">{job.title}</h2>

        {/* Brief description */}
        {job.descriptionbrief && (
          <p className="job-modal-description">{job.descriptionbrief}</p>
        )}

        {/* Detailed paragraphs */}
        {[
          job.descriptionparaone,
          job.descriptionparatwo,
          job.descriptionparathree,
          job.descriptionparafour,
          job.descriptionparafive,
          job.descriptionparasix,
          job.descriptionparaseven,
        ].map(
          (para, idx) =>
            para && (
              <p key={idx} className="job-modal-paragraph">
                {para}
              </p>
            )
        )}

        {/* Responsibilities List */}
        <ul className="job-modal-list">
          {job.listitemone && <li>{job.listitemone}</li>}
          {job.listitemtwo && <li>{job.listitemtwo}</li>}
          {job.listitemthree && (
            <li>
              {job.listitemthree}
              <ul>
                {job.sublistitemone && <li>{job.sublistitemone}</li>}
                {job.sublistitemtwo && <li>{job.sublistitemtwo}</li>}
              </ul>
            </li>
          )}
          {job.listitemfour && <li>{job.listitemfour}</li>}
          {job.listitemfive && <li>{job.listitemfive}</li>}
          {job.listitemsix && <li>{job.listitemsix}</li>}
          {job.listitemseven && <li>{job.listitemseven}</li>}
          {job.listitemeight && <li>{job.listitemeight}</li>}
          {job.listitemnine && <li>{job.listitemnine}</li>}
          {job.listitemten && <li>{job.listitemten}</li>}
          {job.listitemeleven && <li>{job.listitemeleven}</li>}
          {job.listitemtwelve && <li>{job.listitemtwelve}</li>}
          {job.listitemthirteen && <li>{job.listitemthirteen}</li>}
          {job.listitemfourteen && <li>{job.listitemfourteen}</li>}
        </ul>

        {/* Qualifications */}
        {job.secondtitle && (
          <>
            <h3 className="job-modal-subtitle">{job.secondtitle}</h3>
            <ul className="job-modal-list">
              {job.secondtitleitemone && <li>{job.secondtitleitemone}</li>}
              {job.secondtitleitemtwo && <li>{job.secondtitleitemtwo}</li>}
              {job.secondtitleitemthree && <li>{job.secondtitleitemthree}</li>}
              {job.secondtitleitemfour && <li>{job.secondtitleitemfour}</li>}
            </ul>
          </>
        )}

        {/* Other Information */}
        {job.Thirdtitle && (
          <>
            <h3 className="job-modal-subtitle">{job.Thirdtitle}</h3>
            <ul className="job-modal-list">
              {job.thirdtitleitemone && <li>{job.thirdtitleitemone}</li>}
              {job.thirdtitleitemtwo && <li>{job.thirdtitleitemtwo}</li>}
              {job.thirdtitleitemthree && <li>{job.thirdtitleitemthree}</li>}
            </ul>
          </>
        )}

        {/* Final Message */}
        {job.lastmessage && (
          <p className="job-modal-final">{job.lastmessage}</p>
        )}
      </div>
    </div>
  );
}
