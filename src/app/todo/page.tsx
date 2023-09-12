"use client"
import React, { useState } from 'react';
import TaskList from '../../components/taskList/taskList'
import { Task } from '../../types';

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');

  const handleTaskAdd = () => {
    if (taskText.trim() === '') return;

    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const handleTaskToggle = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  const handleTaskDelete = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Agregar una nueva tarea..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="mr-2 w-full border border-gray-300 rounded p-2"
        />
        <button onClick={handleTaskAdd} className="bg-blue-500 text-white p-2 rounded">
          Agregar
        </button>
      </div>
      <TaskList tasks={tasks} onTaskToggle={handleTaskToggle} onTaskDelete={handleTaskDelete} />
    </div>
  );
};

export default Todo;
