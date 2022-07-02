import React from 'react';
import { TiTick } from 'react-icons/ti';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const CompletedTasksRow = ({
  tasks,
  setUpdateCompleteTask,
  setConfirmDelete,
  refetch,
}) => {
  const { _id, isCompleted, taskName, taskDate } = tasks;
  const handleIsComplete = () => {
    fetch(`https://jikmunn-todo-app.herokuapp.com/completedTasks/${_id}`, {
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
          toast.success(`You just rembered ${taskName} is not completed yet!!`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <th>
        {/* {(isCompleted === false || !isCompleted) && (
            <label>
              <input
                type="checkbox"
                className="checkbox"
                onClick={handleComplete}
              />
            </label>
          )} */}
        {isCompleted === true && (
          <button className="btn btn-xs btn-circle" onClick={handleIsComplete}>
            <TiTick className="text-lg md:text-2xl" />
          </button>
        )}
      </th>
      <td>{taskName}</td>
      <td>{taskDate}</td>
      <th>
        <label
          htmlFor="update-complete-task-modal"
          className="btn  btn-circle bg-green-500 hover:bg-green-300 text-white mr-6"
          onClick={() => setUpdateCompleteTask(tasks)}
        >
          <MdEdit className="text-lg md:text-2xl" />
        </label>
        <label
          htmlFor="confirm-modal"
          className="btn  btn-circle  btn-error text-white"
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

export default CompletedTasksRow;
