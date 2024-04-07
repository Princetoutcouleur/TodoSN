import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { updateTask } from "../../services/firestoreService";

const TaskItem = ({ task, handleUpdate }) => {
  const handleTaskCompleted = async () => {
    await updateTask(task.id, { completed: true });
    handleUpdate();
  };

  return (
    <div
      className={`tache px-2 py-2 mb-3 rounded-4 ${
        task.completed ? "bg-success-subtle" : "bg-light"
      }`}
    >
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 ps-3">
          <p>{task.title}</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center ">
          <div className="d-flex gap-2">
            {task.completed ? (
              <button className="border-0 rounded shadow-lg" disabled>
                <CiCircleCheck className="fw-bold fs-1 text-secondary" />
              </button>
            ) : (
              <button
                className="border-0 rounded shadow-lg"
                onClick={handleTaskCompleted}
              >
                <CiCircleCheck className="fw-bold fs-1 text-success" />
              </button>
            )}
            <button className="border-0 rounded shadow-lg">
              <CiEdit className="fw-bold fs-1 text-primary" />
            </button>
            <button className="border-0 rounded shadow-lg">
              <CiTrash className="fw-bold fs-1 text-danger" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
