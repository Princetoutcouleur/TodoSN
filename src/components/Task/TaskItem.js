import React, { useState } from "react";
import { CiEdit, CiTrash, CiCircleCheck } from "react-icons/ci";
import { GrUpdate } from "react-icons/gr";
import { updateTask, deleteTask } from "../../services/firestoreService";

const TaskItem = ({ task, handleUpdate }) => {
  const handleTaskCompleted = async () => {
    await updateTask(task.id, { completed: true });
    handleUpdate();
  };

  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    await updateTask(task.id, { title: editedTitle });
    handleUpdate();
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditedTitle(task.title);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
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
          {editing ? (
            <input
              type="text"
              className="form-control"
              value={editedTitle}
              onChange={handleInputChange}
            />
          ) : (
            <p>{task.title}</p>
          )}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center">
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
            {editing ? (
              <>
                <button
                  className="border-0 rounded shadow-lg"
                  onClick={handleSaveClick}
                >
                  <GrUpdate className="fs-3 text-primary" />
                </button>
                <button
                  className="border-0 rounded shadow-lg text-danger"
                  onClick={handleCancelClick}
                >
                  Annuler
                </button>
              </>
            ) : (
              <button
                className="border-0 rounded shadow-lg"
                onClick={handleEditClick}
              >
                <CiEdit className="fw-bold fs-1 text-primary" />
              </button>
            )}
            <button className="border-0 rounded shadow-lg" onClick={handleDelete}>
              <CiTrash className="fw-bold fs-1 text-danger" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
