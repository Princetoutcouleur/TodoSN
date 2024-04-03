import { firestore, auth } from "../firebase/firebase";

const addTask = async (taskData) => {
  // Code pour ajouter une tâche à Firestore
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error("User not authenticated");
      return null;
    }

    const taskRef = await firestore.collection("tasks").add({
      ...taskData,
      userId: user.uid
    });
    console.log("Task added with ID: ", taskRef.id);
    return taskRef.id;
  } catch (error) {
    console.error("Error adding task: ", error);
    return null;
  }
};

const getTasks = async () => {
  // Code pour récupérer les tâches depuis Firestore
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error("User not authenticated");
      return [];
    }

    const tasksSnapshot = await firestore.collection("tasks").where("userId", "==", user.uid).get();
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
