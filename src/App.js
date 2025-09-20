import React from 'react';
import ProjectBoard from './components/Board/ProjectBoard';

const dummyTasks = [
  { _id: '1', title: 'Design UI', description: 'Create wireframe', status: 'todo', assignedTo: { username: 'Alice' } },
  { _id: '2', title: 'Setup Database', description: 'MongoDB cluster', status: 'in-progress', assignedTo: { username: 'Bob' } },
  { _id: '3', title: 'Implement Auth', description: 'JWT based login', status: 'done', assignedTo: { username: 'Chris' } },
];

function App() {
  return (
    <div className="container">
      <h1>Project Management Tool</h1>
      <ProjectBoard tasks={dummyTasks} />
    </div>
  );
}

export default App;
