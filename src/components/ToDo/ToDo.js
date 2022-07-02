import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import DeleteTasks from '../DeleteTasks/DeleteTasks';
import ToDoRow from './ToDoRow';
import UpdateToDoTasks from './UpdateToDoTasks/UpdateToDoTasks';

const ToDo = () => {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [updateToDoTask, setUpdateToDoTask] = useState(null);

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
      {tasksLists?.length === 0 ? (
        <h1 className="text-lg text-red-500 text-center my-6">
          No todo lists has added yet!
        </h1>
      ) : (
        <div className="container mx-auto">
          <h1 className="text-lg py-4">
            {' '}
            {user?.displayName ? user?.displayName + "'s" : '  '} to-do lists
          </h1>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* <head  */}
              <thead>
                <tr>
                  <th className="text-lg font-bold">#</th>
                  <th className="text-lg font-bold">Task Name</th>
                  <th className="text-lg font-bold">Task Date</th>
                  <th className="text-lg font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {tasksLists
                  ?.slice(0)
                  ?.reverse()
                  ?.map((tasks) => (
                    <ToDoRow
                      key={tasks?._id}
                      tasks={tasks}
                      setUpdateToDoTask={setUpdateToDoTask}
                      setConfirmDelete={setConfirmDelete}
                      refetch={refetch}
                      user={user}
                    />
                  ))}
              </tbody>
            </table>
          </div>
          {updateToDoTask && (
            <UpdateToDoTasks
              refetch={refetch}
              updateToDoTask={updateToDoTask}
              setUpdateToDoTask={setUpdateToDoTask}
              user={user}
            />
          )}{' '}
          {confirmDelete && (
            <DeleteTasks
              refetch={refetch}
              confirmDelete={confirmDelete}
              setConfirmDelete={setConfirmDelete}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ToDo;
