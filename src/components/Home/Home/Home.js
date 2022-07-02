import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import AddToDo from '../AddToDo/AddToDo';
import { useQuery } from 'react-query';
import TasksListsRow from '../TasksLists/TasksListsRow';

const Home = () => {
  const {
    data: tasksLists,
    isLoading,
    refetch,
  } = useQuery('tasksLists', () =>
    fetch(`https://jikmunn-todo-app.herokuapp.com/tasks`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        // authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return;

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
      <div className="container mx-auto">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <head  */}
            <thead>
              <tr>
                <th className="text-lg font-bold">#</th>
                <th className="text-lg font-bold">Task Name</th>
                <th className="text-lg font-bold">Task Date</th>
                {/* <th className="text-lg font-bold">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {tasksLists
                ?.slice(0)
                ?.reverse()
                ?.map((tasks, idx) => (
                  <TasksListsRow
                    key={tasks?._id}
                    tasks={tasks}
                    idx={idx}
                    refetch={refetch}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddToDo refetch={refetch} />
    </div>
  );
};

export default Home;
