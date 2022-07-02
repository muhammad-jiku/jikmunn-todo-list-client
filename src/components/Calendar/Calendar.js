import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

import 'react-day-picker/dist/style.css';
import DateTodoTasks from './CalendarTasks/DateTodoTasks';
import DateCompletedTasks from './CalendarTasks/DateCompletedTasks';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTaskType, setSelectedTaskType] = useState('Todo');
  // date && format(date,'PP') is used for preventing 'date-fns' error of RangeError: Invalid time value
  // const formattedDate = date && format(date, 'PP');
const [user] = useAuthState(auth);

  const formattedDate = format(date, 'PP');

  return (
    <div className="container mx-auto py-6">
      <DayPicker
        mode="single"
        selected={date}
        // onSelect={setDate}
        onDayClick={setDate} // is used for preventing 'date-fns' error of RangeError: Invalid time value
      />

      <select
        id="types"
        value={selectedTaskType}
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => setSelectedTaskType(e.target.value)}
      >
        <option value="Todo">Todo</option>
        <option value="Completed Todo">Completed Todo</option>
      </select>

      <div className="my-6">
        {selectedTaskType === 'Todo' && (
          <DateTodoTasks formattedDate={formattedDate} user={user} />
        )}
        {selectedTaskType === 'Completed Todo' && (
          <DateCompletedTasks formattedDate={formattedDate} user={user} />
        )}
      </div>
    </div>
  );
};

export default Calendar;
