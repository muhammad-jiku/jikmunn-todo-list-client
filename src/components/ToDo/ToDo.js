import React from 'react';
import { useQuery } from 'react-query';
import ToDoRow from './ToDoRow';

const ToDo = () => {
  const {
    data: tasksLists,
    isLoading,
    refetch,
  } = useQuery('tasksLists', () =>
    fetch(`http://localhost:5000/tasks`, {
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
      <h1 className="text-lg py-4">Your's todo lists</h1>
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
            {tasksLists
              ?.slice(0)
              ?.reverse()
              ?.map((tasks, idx) => (
                <ToDoRow
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
  );
};

export default ToDo;
