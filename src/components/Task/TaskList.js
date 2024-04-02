import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { getTasks } from "../../services/firestoreService";

const TaskList = (updateKey) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
    };
    fetchTasks();
  }, [updateKey]);

  return (
    <div className="card p-3 rounded-4 mb-5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
