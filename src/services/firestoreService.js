import { firestore } from "../firebase/firebase";

const addTask = async (taskData) => {
  // Code pour ajouter une tâche à Firestore
  try {
    const taskRef = await firestore.collection("tasks").add(taskData);
    console.log("Task added with ID: ", taskRef.id);
    return taskRef.id;
  } catch (error) {
    console.error("Error adding task: ", error);
    return null;
  }
};

// Utilisation de la fonction pour ajouter une tâche
const taskData = {
  title: "Ma première tâche",
  completed: false,
};

const getTasks = async () => {
  // Code pour récupérer les tâches depuis Firestore
  try {
    const tasksSnapshot = await firestore.collection("tasks").get();
    const tasks = [];
    tasksSnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    return tasks;
  } catch (error) {
    console.error("Error getting tasks: ", error);
    return [];
  }
};

export { addTask, getTasks };
