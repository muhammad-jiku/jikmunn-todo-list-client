import React from 'react';
import { toast } from 'react-toastify';

const DeleteTasks = ({ refetch, confirmDelete, setConfirmDelete }) => {
  const { _id, taskName } = confirmDelete;

  const handleDelete = (id) => {
    console.log(confirmDelete);
    fetch(`https://jikmunn-todo-app.herokuapp.com/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success(`${taskName} is removed from your order collection`);
          setConfirmDelete(null);
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-700">
            are you sure want to remove {taskName} from your todos?
          </h3>

          <div className="modal-action">
            <button
              className="btn btn-error text-white font-bold"
              onClick={() => handleDelete(_id)}
            >
              Yes
            </button>
            <label htmlFor="confirm-modal" className="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTasks;
