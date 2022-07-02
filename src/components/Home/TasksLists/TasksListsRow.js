import React from 'react';
// import { TiTick } from 'react-icons/ti';
// import { MdEdit } from 'react-icons/md';
// import { RiDeleteBin7Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const TasksListsRow = ({ tasks, refetch, user }) => {
  console.log(tasks);
  const { _id, isCompleted, taskName, taskDate } = tasks;

  const updateTaskList = {
    taskName: taskName,
    user: user?.email,
    // userName: displayName,
    taskDate: taskDate,
    // isCompleted: false,
  };

  // const handleComplete = () => {
  //   fetch(`https://jikmunn-todo-app.herokuapp.com/tasks/${_id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       if (data?.modifiedCount > 0) {
  //         refetch();
  //         toast.success(`You completed ${taskName} successfully!`);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handleIsComplete = () => {
  //   fetch(`https://jikmunn-todo-app.herokuapp.com/completedTasks/${_id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       if (data?.modifiedCount > 0) {
  //         refetch();
  //         toast.success(`You just rembered ${taskName} is not completed yet!!`);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

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

  return (
    <tr>
      <th>
        {(isCompleted === false || !isCompleted) && (
          <label>
            <input
              type="checkbox"
              className="checkbox"
              onClick={handleComplete}
            />
          </label>
        )}
        {/* {isCompleted === true && (
          <button className="btn btn-xs btn-circle" onClick={handleIsComplete}>
            <TiTick className="text-lg md:text-2xl" />
          </button>
        )} */}
      </th>
      <td>{taskName}</td>
      <td>{taskDate}</td>
      {/* <th>
        <button className="btn  btn-circle bg-green-500 text-white mr-6">
          <MdEdit className="text-lg md:text-2xl" />
        </button>
        <button className="btn  btn-circle bg-red-500 text-white">
          <RiDeleteBin7Fill className="text-lg md:text-2xl" />
        </button>
      </th> */}
    </tr>
  );
};

export default TasksListsRow;
