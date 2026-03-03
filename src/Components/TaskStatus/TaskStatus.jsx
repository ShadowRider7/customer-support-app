import React from "react";

const TaskStatus = () => {
  return (
    <div>
      <div className="mb-5 ">
        <h2 className="text-2xl font-semibold mb-2">Task Status</h2>
        <p>Select a ticket to add to Task Status</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Resolved Task</h2>
        <p>No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default TaskStatus;
