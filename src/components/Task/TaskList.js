import React from "react";
import TaskItem from "./TaskItem";
const TaskList = () => {
  return (
    <div className="card p-3 rounded-4 mb-5">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
};

export default TaskList;
