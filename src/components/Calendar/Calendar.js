import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

import 'react-day-picker/dist/style.css';
import DateTodoTasks from './CalendarTasks/DateTodoTasks';
import DateCompletedTasks from './CalendarTasks/DateCompletedTasks';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTaskType, setSelectedTaskType] = useState(false);
  // date && format(date,'PP') is used for preventing 'date-fns' error of RangeError: Invalid time value
  // const formattedDate = date && format(date, 'PP');
  const formattedDate = format(date, 'PP');

  return (
    <div>
      <DayPicker
        mode="single"
        selected={date}
        // onSelect={setDate}
        onDayClick={setDate} // is used for preventing 'date-fns' error of RangeError: Invalid time value
      />

      <DateTodoTasks formattedDate={formattedDate} />
      {/* <DateCompletedTasks formattedDate={formattedDate} /> */}
    </div>
  );
};

export default Calendar;
