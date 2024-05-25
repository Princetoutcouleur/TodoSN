import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { getTasks } from "../../services/firestoreService";

const TaskList = ({ updateKey }) => {
  const [tasks, setTasks] = useState([]);
  const [updateTask, setUpdateTask] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
    };
    fetchTasks();
  }, [updateKey, updateTask]);

  return (
    <div className="card p-3 rounded-4 mb-5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} handleUpdate={() => setUpdateTask(prev => !prev)} />
      ))}
    </div>
  );
};

export default TaskList;
