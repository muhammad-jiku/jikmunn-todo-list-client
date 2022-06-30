import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddToDo = () => {
  const [date, setDate] = useState(new Date());
  // date && format(date,'PP') is used for preventing 'date-fns' error of RangeError: Invalid time value
  // const formattedDate = date && format(date, 'PP');
  const formattedDate = format(date, 'PP');

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    // getValues,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    const taskName = watch('taskName').toUpperCase();
    const taskDate = watch('taskDate');
    console.log(taskName, taskDate);
  };

  return (
    <div>
      {/* <label htmlFor="add-task-modal" className="btn modal-button">
        open modal
      </label> */}

      <input type="checkbox" id="add-task-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            label
            htmlFor="add-task-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="text-2xl">Select date to add task</h1>
          <div className="container mx-auto sm:px-14 md:px-16">
            <DayPicker
              mode="single"
              selected={date}
              // onSelect={setDate}
              onDayClick={setDate} // is used for preventing 'date-fns' error of RangeError: Invalid time value
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            //   style={{ backgroundColor: '#FFFFFF', color: 'black' }}
          >
            <div className="form-control mb-4">
              {/* <label className="label">
                <span className="label-text text-primary font-bold">Name</span>
              </label> */}
              <input
                type="text"
                placeholder="Add task name"
                // defaultValue={user?.displayName}
                //   value={user?.displayName}
                className="input input-bordered input-primary"
                {...register('taskName', {
                  required: {
                    value: true,
                    message: 'Please insert the task name',
                  },
                  minLength: {
                    value: 3,
                    message: 'Task name can not be less than 3 letters',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Task name can not be more than 30 letters',
                  },
                })}
                //   readOnly
                required
                // disabled
                //   style={{ backgroundColor: '#FFFFFF', color: 'black' }}
              />
              <p className="text-red-500 font-semibold">
                {errors?.taskName?.type === 'required' && (
                  <span>{errors?.taskName?.message}</span>
                )}
                {errors?.taskName?.type === 'minLength' && (
                  <span>{errors?.taskName?.message}</span>
                )}
                {errors?.taskName?.type === 'maxLength' && (
                  <span>{errors?.taskName?.message}</span>
                )}
              </p>
            </div>

            <div className="form-control mb-4">
              {/* <label className="label">
                <span className="label-text text-primary font-bold">Name</span>
              </label> */}
              <input
                type="text"
                placeholder="Date "
                // defaultValue={user?.displayName}
                value={formattedDate}
                className="input input-bordered input-primary"
                {...register('taskDate', {
                  required: {
                    value: true,
                    message: 'Please select the date',
                  },
                })}
                //   readOnly
                required
                // disabled
                //   style={{ backgroundColor: '#FFFFFF', color: 'black' }}
              />
              <p className="text-red-500 font-semibold">
                {errors?.taskDate?.type === 'required' && (
                  <span>{errors?.taskDate?.message}</span>
                )}
              </p>
            </div>

            <div className="form-control mt-6">
              {/* {errorMessage} */}
              <input
                type="submit"
                className="btn btn-primary text-white uppercase"
                value="Add task"
                disabled={errors?.taskName}
              />{' '}
            </div>
            {/* <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={handleSignIn}
                >
                  Sign in
                </button>
              </div>{' '} */}
          </form>

          {/* <div className="modal-action">
            <label htmlFor="add-task-modal" className="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddToDo;
