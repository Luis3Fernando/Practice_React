import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title: title,
      description: description,
    });
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
      <h1 className="text-2x1 font-bold text-white mb-4">CREAR TAREA</h1>
      <input
        type="text"
        placeholder="Escribe algo"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-400 p-3 w-full mb-2 placeholder-gray-500"
      />

      <textarea
      className="bg-slate-400 p-3 w-full mb-2 placeholder-gray-500"
        placeholder="Digita la descripcion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button className="bg-indigo-400 px-3 rounded-md py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
