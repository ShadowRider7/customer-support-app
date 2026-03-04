import React from "react";
import TaskStatusCard from "../TaskStatusCard/TaskStatusCard";
import ResolvedTaskCard from "../ResolvedTaskCard/ResolvedTaskCard";

const TaskStatus = ({ inProgress, completeTaskData, resolved }) => {
  return (
    <div>
      <div className="mb-5 ">
        <h2 className="text-2xl font-semibold mb-2">Task Status</h2>
        {inProgress.length >= 1 ? (
          ""
        ) : (
          <p>Select a ticket to add to Task Status</p>
        )}
      </div>
      {inProgress.map((taskCard) => (
        <TaskStatusCard
          key={taskCard.id}
          completeTaskData={completeTaskData}
          inProgress={inProgress}
          taskCard={taskCard}
        ></TaskStatusCard>
      ))}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Resolved Task</h2>
        {resolved.length >= 1 ? "" : <p>No resolved tasks yet.</p>}
        {resolved.map((resolvedcard) => (
          <ResolvedTaskCard
            key={resolvedcard.id}
            resolvedcard={resolvedcard}
          ></ResolvedTaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
