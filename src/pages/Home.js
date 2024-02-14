import React from "react";
import HeaderHome from "../components/headerHome";
import TaskList from "../components/Task/TaskList";

const Home = () => {
  return (
    <div id="Home" className="container pt-5">
      <HeaderHome />
      <p className="mt-5 fs-4">Ajouter une tache !</p>
      <div className=" d-flex justify-content-center gap-3 align-items-center border rounded-4 py-2 px-3 mb-3  bg-danger">
        <input
          className="border-0 border border-1 rounded-3 p-1 bg-white w-75"
          type="text"
          placeholder="Ajouter une tache"
        />
        <button className="border border-1 rounded fs-5 fw-bold bg-white text-secondary">
          +
        </button>
      </div>
      <div className="d-lex justify-content-center">
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
