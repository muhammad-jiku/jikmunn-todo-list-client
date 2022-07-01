import React from 'react';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const ToDoRow = ({ tasks, setUpdateToDoTask, setConfirmDelete, refetch }) => {
  console.log(tasks);
  const { _id, isCompleted, taskName, taskDate } = tasks;
  const handleComplete = () => {
    fetch(`http://localhost:5000/tasks/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
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

  return (
    <tr>
      <th>
        {(isCompleted === false || !isCompleted) && (
          <label>
            <input type="checkbox" class="checkbox" onClick={handleComplete} />
          </label>
        )}
        {/* {isCompleted === true && (
          <button class="btn btn-xs btn-circle" onClick={handleIsComplete}>
            <TiTick className="text-lg md:text-2xl" />
          </button>
        )} */}
      </th>
      <td>{taskName}</td>
      <td>{taskDate}</td>
      <th>
        <label
          htmlFor="update-todo-task-modal"
          class="btn  btn-circle bg-green-500 hover:bg-green-300 text-white mr-6"
          onClick={() => setUpdateToDoTask(tasks)}
        >
          <MdEdit className="text-lg md:text-2xl" />
        </label>
        <label
          htmlFor="confirm-modal"
          class="btn  btn-circle  btn-error text-white"
          onClick={() => {
            console.log(tasks);
            setConfirmDelete(tasks);
          }}
        >
          <RiDeleteBin7Fill className="text-lg md:text-2xl" />
        </label>
      </th>
    </tr>
  );
};

export default ToDoRow;