import React from 'react';
import './Board.css';
import TaskCard from '../TaskCard/TaskCard';

const ProjectBoard = ({ tasks }) => {
  return (
    <div className="board">
      {['todo', 'in-progress', 'done'].map((status) => (
        <div key={status} className="board-column">
          <h3>{status.toUpperCase()}</h3>
          {tasks.filter(task => task.status === status).map(task => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectBoard;
