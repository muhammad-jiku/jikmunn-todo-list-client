import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteTasks from '../DeleteTasks/DeleteTasks';
import CompletedTasksRow from './CompletedTasksRow';
import UpdateCompletedTasks from './UpdateCompletedTasks/UpdateCompletedTasks';
// import DeleteCompletedTasks from './DeleteCompletedTasks/DeleteCompletedTasks';

const CompletedTasks = () => {
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [updateCompleteTask, setUpdateCompleteTask] = useState(null);

  const {
    data: completedTasks,
    isLoading,
    refetch,
  } = useQuery('completedTasks', () =>
    fetch(`https://jikmunn-todo-app.herokuapp.com/completedTasks`, {
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
      <div className="container mx-auto">
        <h1 className="text-lg py-4">Your's completed tasks</h1>
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
              {completedTasks
                ?.slice(0)
                ?.reverse()
                ?.map((tasks) => (
                  <CompletedTasksRow
                    key={tasks?._id}
                    tasks={tasks}
                    setUpdateCompleteTask={setUpdateCompleteTask}
                    setConfirmDelete={setConfirmDelete}
                    refetch={refetch}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {updateCompleteTask && (
          <UpdateCompletedTasks
            refetch={refetch}
            updateCompleteTask={updateCompleteTask}
            setUpdateCompleteTask={setUpdateCompleteTask}
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
    </div>
  );
};

export default CompletedTasks;
