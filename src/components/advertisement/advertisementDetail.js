import React from "react";
export default function AdPopup({ name, type, mediaUrl }) {
  console.log(name, type, mediaUrl);
  return (
    <div>
      <div className="mb-6" style={{ width: "50rem" }}>
        {type == "magazine" && (
          <embed
            src={mediaUrl}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        )}
        {type == "tv" && <video src={mediaUrl} width="100%" controls />}
        {type == "radio" && <audio src={mediaUrl} controls />}
        {type == "billboard" && (
          <img src={mediaUrl} alt={name} className="w-full h-auto" />
        )}
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          {type}
        </span>
      </div>
    </div>
  );
}
