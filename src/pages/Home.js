import React, { useState } from "react";
import HeaderHome from "../components/headerHome";
import TaskList from "../components/Task/TaskList";
import { addTask } from "../services/firestoreService";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const [taskText, setTaskText] = useState("");
  const [updateKey, setUpdateKey] = useState(0);
  const { user } = useAuth();

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = async () => {
    if (taskText.trim() === "") {
      return; // Ne rien faire si le texte de la tâche est vide
    }

    const newTask = {
      title: taskText,
      completed: false,
    };

    await addTask(newTask); // Ajoute la nouvelle tâche à Firestore
    setTaskText(""); // Réinitialise l'input après l'ajout de la tâche
    setUpdateKey(updateKey + 1); // Met à jour la clé pour actualiser la liste des tâches
  };
  return (
    <div id="Home" className="container pt-5">
      <HeaderHome userId={user.uid} />
      <p className="mt-5 fs-4">Ajouter une tache !</p>
      <div className=" d-flex justify-content-center gap-3 align-items-center border rounded-4 py-2 px-3 mb-3  bg-danger">
        <input
          className="border-0 border border-1 rounded-3 p-1 bg-white w-75"
          type="text"
          placeholder="Ajouter une tache"
          value={taskText}
          onChange={handleInputChange}
        />
        <button
          className="border border-1 rounded fs-5 fw-bold bg-white text-secondary"
          onClick={handleAddTask}
        >
          +
        </button>
      </div>
      <div className="d-lex justify-content-center">
        <TaskList updateKey={updateKey} />
      </div>
    </div>
  );
};

export default Home;
