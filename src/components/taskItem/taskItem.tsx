// src/components/TaskItem.tsx
import React from 'react';
import { Task } from '../../types'

type TaskItemProps = {
  task: Task;
  onTaskToggle: (id: number) => void;
  onTaskDelete: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskToggle, onTaskDelete }) => {
  return (
    <li className="flex items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskToggle(task.id)}
        className="mr-2"
      />
      <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
      <button onClick={() => onTaskDelete(task.id)} className="ml-4 text-red-500">
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;
