import React from 'react';
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';

const TasksListsRow = ({ tasks }) => {
  console.log(tasks);
  const { _id, isCompleted, taskName, taskDate } = tasks;
  const handleComplete = () => {
    fetch(`http://localhost:5000/tasks/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.modifiedCount > 0) {
          // refetch();
          toast.success(`You completed ${taskName} successfully!`);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleIsComplete = () => {
    fetch(`http://localhost:5000/task/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.modifiedCount > 0) {
          // refetch();
          toast.success(`You just rembered ${taskName} is not completed yet!!`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <th>
        {(isCompleted === false || !isCompleted) && (
          <label>
            <input
              type="checkbox"
              class="checkbox h-12 w-12"
              onClick={handleComplete}
            />
          </label>
        )}
        {isCompleted === true && (
          <button class="btn btn-circle h-12 w-12" onClick={handleIsComplete}>
            <TiTick className="text-lg md:text-2xl" />
          </button>
        )}
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
