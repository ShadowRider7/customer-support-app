import React from "react";

const TaskStatusCard = ({ taskCard, completeTaskData }) => {
  return (
    <div className="card mb-3 bg-base-100 shadow-xl p-3">
      <h2 className=" font-semibold">{taskCard.title}</h2>
      <div
        onClick={() => completeTaskData(taskCard)}
        className="mt-2 btn w-full text-xl bg-green-500 text-white rounded-xl"
      >
        Complete
      </div>
    </div>
  );
};

export default TaskStatusCard;
