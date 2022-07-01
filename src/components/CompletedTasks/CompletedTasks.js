import React from 'react';
import { useQuery } from 'react-query';
import CompletedTasksRow from './CompletedTasksRow';

const CompletedTasks = () => {
  const {
    data: completedTasks,
    isLoading,
    refetch,
  } = useQuery('completedTasks', () =>
    fetch(`http://localhost:5000/completedTasks`, {
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
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
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
                ?.map((tasks, idx) => (
                  <CompletedTasksRow
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
    </div>
  );
};

export default CompletedTasks;
