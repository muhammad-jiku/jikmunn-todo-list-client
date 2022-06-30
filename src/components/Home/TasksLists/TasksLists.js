import React, { useEffect, useState } from 'react';
import TasksListsRow from './TasksListsRow';

const TasksLists = () => {
  const [tasksLists, setTasksLists] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/tasks`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTasksLists(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mx-auto">
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <head  */}
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Task Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tasksLists
              ?.slice(0)
              ?.reverse()
              ?.map((tasks, idx) => (
                <TasksListsRow key={tasks?._id} tasks={tasks} idx={idx} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksLists;
