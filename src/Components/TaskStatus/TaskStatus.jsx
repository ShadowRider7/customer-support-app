import React from "react";
import TaskStatusCard from "../TaskStatusCard/TaskStatusCard";
import ResolvedTaskCard from "../ResolvedTaskCard/ResolvedTaskCard";

const TaskStatus = () => {
  return (
    <div>
      <div className="mb-5 ">
        <h2 className="text-2xl font-semibold mb-2">Task Status</h2>
        <p>Select a ticket to add to Task Status</p>
        <TaskStatusCard></TaskStatusCard>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Resolved Task</h2>
        <p>No resolved tasks yet.</p>
        <ResolvedTaskCard></ResolvedTaskCard>
      </div>
    </div>
  );
};

export default TaskStatus;
