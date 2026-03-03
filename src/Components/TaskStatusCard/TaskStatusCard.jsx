import React from "react";

const TaskStatusCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl p-3">
      <h2 className=" font-semibold">Payment Failed - Card Declined</h2>
      <div className="mt-2 btn w-full text-xl bg-green-500 text-white rounded-xl">
        Complete
      </div>
    </div>
  );
};

export default TaskStatusCard;
