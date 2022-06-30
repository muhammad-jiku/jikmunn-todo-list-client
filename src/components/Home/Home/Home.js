import React from 'react';
import AddToDo from '../AddToDo/AddToDo';
import TasksLists from '../TasksLists/TasksLists';

const Home = () => {
  return (
    <div>
      <div className="container mx-auto p-4 flex justify-between">
        <h1>To-do lists</h1>
        <label htmlFor="add-task-modal" className="modal-button cursor-pointer">
          Add to-do
        </label>
      </div>
      <AddToDo />
      <TasksLists />
    </div>
  );
};

export default Home;
