import React from 'react';
import { useQuery } from 'react-query';
import DateTasksRow from './DateTasksRow';

const DateTodoTasks = ({ formattedDate, user }) => {
  const {
    data: todoLists,
    isLoading,
    refetch,
  } = useQuery(['todoLists', formattedDate, user], () =>
    fetch(
      `https://jikmunn-todo-app.herokuapp.com/tasks/lists?date=${formattedDate}&user=${user?.email}`,
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
      {todoLists?.length === 0 ? (
        <h1 className="text-lg text-red-500  text-center">
          No todo lists has found on {formattedDate}
        </h1>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <head  */}
            <thead>
              <tr>
                <th className="text-lg font-bold">#</th>
                <th className="text-lg font-bold">Task Name</th>
                <th className="text-lg font-bold">Task Details</th>
                {/* <th className="text-lg font-bold">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {todoLists
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

export default DateTodoTasks;
