import { firestore, auth } from "../firebase/firebase";

const addTask = async (taskData) => {
  // Code pour ajouter une tâche à Firestore
  const user = auth.currentUser;
  console.log("Current user:", user);
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error("User not authenticated");
      return null;
    }

    const taskRef = await firestore.collection("tasks").add({
      ...taskData,
      userId: user.uid
    }).then((value) => {
      console.log({ value})
    }).catch(console.error);
    console.log("Task added with ID: ", taskRef.userId);
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

const updateTask = async (taskId, updatedData) => {
  try {
    await firestore.collection("tasks").doc(taskId).update(updatedData);
    console.log("Task updated successfully");
  } catch (error) {
    console.error("Error updating task: ", error);
  }
};

export { getTasks, addTask, updateTask };
