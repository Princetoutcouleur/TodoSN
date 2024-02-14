import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

const TaskItem = () => {
  return (
    <div className=" px-2 py-2 mb-3 bg-light w-100 rounded-4 ">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 ps-3">
          <p>Faire du sport</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end gap-2">
          <button className="btn btn-success">
            <CiCircleCheck className="fw-bold fs-4" />
          </button>
          <button className="btn btn-primary">
            <CiEdit className="fw-bold fs-4" />
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
