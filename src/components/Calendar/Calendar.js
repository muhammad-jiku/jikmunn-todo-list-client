import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
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
      <h1 className="text-3xl text-red-600 text-center">
        You've selected {formattedDate}
      </h1>
      {console.log(formattedDate)}
    </div>
  );
};

export default Calendar;
