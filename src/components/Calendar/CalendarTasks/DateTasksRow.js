import React from 'react';
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';

const DateTasksRow = ({ tasks, refetch, formattedDate, user }) => {
  const { _id, taskDate, taskName, isCompleted } = tasks;
  console.log(taskDate, formattedDate);

  const updateTaskList = {
    taskName: taskName,
    user: user?.email,
    // userName: displayName,
    taskDate: taskDate,
    // isCompleted: false,
  };

  const handleComplete = () => {
    fetch(`https://jikmunn-todo-app.herokuapp.com/tasks/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateTaskList),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.modifiedCount > 0) {
          refetch();
          toast.success(`You completed ${taskName} successfully!`);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleIsComplete = () => {
    fetch(`https://jikmunn-todo-app.herokuapp.com/completedTasks/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateTaskList),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.modifiedCount > 0) {
          refetch();
          toast.success(`You just rembered ${taskName} is not completed yet!!`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <td>
        {(isCompleted === false || !isCompleted) && (
          <label>
            <input
              type="checkbox"
              className="checkbox"
              onClick={handleComplete}
            />
          </label>
        )}
        {isCompleted === true && (
          <button className="btn btn-xs btn-circle" onClick={handleIsComplete}>
            <TiTick className="text-lg md:text-2xl" />
          </button>
        )}
      </td>
      <td>{taskName}</td>
      <td>
        {isCompleted === false && (
          <span className="text-red-500">Not Completed</span>
        )}
        {isCompleted === true && (
          <span className="text-green-500">Completed</span>
        )}
      </td>
    </tr>
  );
};

export default DateTasksRow;
