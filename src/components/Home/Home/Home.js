import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import AddToDo from '../AddToDo/AddToDo';
import { useQuery } from 'react-query';
import TasksListsRow from '../TasksLists/TasksListsRow';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {
  const [user] = useAuthState(auth);

  const {
    data: tasksLists,
    isLoading,
    refetch,
  } = useQuery(['tasksLists', user], () =>
    fetch(`https://jikmunn-todo-app.herokuapp.com/tasks?user=${user?.email}`, {
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
        <h1>
          {user?.displayName ? user?.displayName + "'s" : '  '} to-do lists
        </h1>
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

      {tasksLists?.length === 0 ? (
        <h1 className="text-lg text-red-500  text-center">
          No todo lists has added yet!
        </h1>
      ) : (
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
                      user={user}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <AddToDo refetch={refetch} user={user} />
    </div>
  );
};

export default Home;
