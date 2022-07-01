import React from 'react';
import { useQuery } from 'react-query';
import DateTasksRow from './DateTasksRow';

const DateCompletedTasks = ({ formattedDate }) => {
  const {
    data: completedTodoLists,
    isLoading,
    refetch,
  } = useQuery(['completedTodoLists', formattedDate], () =>
    fetch(`http://localhost:5000/completedTasks/lists?date=${formattedDate}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        // authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
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
