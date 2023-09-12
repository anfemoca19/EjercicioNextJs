// src/components/TaskList.tsx
import React from 'react';
import TaskItem from '../taskItem/taskItem';
import { Task } from '../../types';

type TaskListProps = {
  tasks: Task[];
  onTaskToggle: (id: number) => void;
  onTaskDelete: (id: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskToggle, onTaskDelete }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskToggle={onTaskToggle}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
