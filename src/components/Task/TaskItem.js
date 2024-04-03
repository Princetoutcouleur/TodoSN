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
    <div className={`tache px-2 py-2 mb-3 rounded-4 ${task.completed ? 'bg-success'  : 'bg-light'}`}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 ps-3">
          <p>{task.title}</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end gap-2">
          {task.completed ? (
            <button className="btn btn-secondary" disabled>
              <CiCircleCheck className="fw-bold fs-4" />
            </button>
          ) : (
            <button className="btn btn-success" onClick={handleTaskCompleted}>
              <CiCircleCheck className="fw-bold fs-4" />
            </button>
          )}
          <button className="btn btn-warning">
            <CiEdit className="fw-bold fs-4 text-success" />
          </button>
          <button className="btn btn-danger">
            <CiTrash className="fw-bold fs-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
