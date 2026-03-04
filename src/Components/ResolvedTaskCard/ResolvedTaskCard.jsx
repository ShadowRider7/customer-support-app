import React from "react";

const ResolvedTaskCard = ({ resolvedcard }) => {
  return (
    <div className="card mb-3 bg-[#E0E7FF] shadow-2xl p-4">
      <h2 className="font-semibold mx-3 ">{resolvedcard.title}</h2>
    </div>
  );
};

export default ResolvedTaskCard;
