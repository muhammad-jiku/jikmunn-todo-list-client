import React from 'react';

const TasksListsRow = ({ tasks }) => {
  const { _id, isCompleted, taskName, taskDate } = tasks;
  const handleIsComplete = () => {};
  console.log(tasks);
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" class="checkbox" onClick={handleIsComplete} />
        </label>
      </th>
      <td>{taskName}</td>
      <td>{taskDate}</td>
      <th>
        <button class="btn btn-ghost btn-xs">Update</button>
        <button class="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default TasksListsRow;
