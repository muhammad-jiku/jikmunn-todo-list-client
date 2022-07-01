import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import AddToDo from '../AddToDo/AddToDo';
import TasksLists from '../TasksLists/TasksLists';

const Home = () => {
  return (
    <div>
      <div className="container mx-auto p-4 flex justify-between">
        <h1>To-do lists</h1>
        <label
          className="btn btn-ghost modal-button cursor-pointer"
          htmlFor="add-task-modal"
        >
          {/* <button
          className="btn btn-ghost modal-button cursor-pointer"
          htmlFor="add-task-modal"
        > */}{' '}
          <BsPlusLg className="mr-4" /> Add to-do {/* </button> */}
        </label>
      </div>
      <AddToDo />
      <TasksLists />
    </div>
  );
};

export default Home;
