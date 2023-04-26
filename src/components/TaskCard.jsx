import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-4xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm m-3">{task.description}</p>
      <button className="bg-red-400 px-2 py-3 rounded-md mt4 hover:bg-red-300 m-3" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
