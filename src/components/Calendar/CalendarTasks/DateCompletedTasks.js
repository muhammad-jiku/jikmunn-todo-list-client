import React from 'react';
import { useQuery } from 'react-query';
import DateTasksRow from './DateTasksRow';

const DateCompletedTasks = ({ formattedDate, user }) => {
  const {
    data: completedTodoLists,
    isLoading,
    refetch,
  } = useQuery(['completedTodoLists', formattedDate, user], () =>
    fetch(
      `https://jikmunn-todo-app.herokuapp.com/completedTasks/lists?date=${formattedDate}&user=${user?.email}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          // authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
        },
      }
    ).then((res) => res.json())
  );

  if (isLoading) return;

  return (
    <div className="container mx-auto">
      {completedTodoLists?.length === 0 ? (
        <h1 className="text-lg text-red-500  text-center">
          No completed todo lists has found on {formattedDate}
        </h1>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-lg font-bold">#</th>
                <th className="text-lg font-bold">Task Name</th>
                <th className="text-lg font-bold">Task Details</th>
                {/* <th className="text-lg font-bold">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {completedTodoLists
                ?.slice(0)
                ?.reverse()
                ?.map((tasks, idx) => (
                  <DateTasksRow
                    key={idx}
                    tasks={tasks}
                    refetch={refetch}
                    formattedDate={formattedDate}
                    user={user}
                  />
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DateCompletedTasks;
