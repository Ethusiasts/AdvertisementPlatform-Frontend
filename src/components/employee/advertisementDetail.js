import React from "react";
export default function AdPopup({ billboard }) {
  return (
    <div>
      <div className="mb-6" style={{ height: "30rem" }}>
        <embed
          src={billboard.file}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
