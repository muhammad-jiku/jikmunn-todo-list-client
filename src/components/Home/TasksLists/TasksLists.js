import React, { useEffect, useState } from 'react';

const TasksLists = () => {
  const [tasksLists, setTasksLists] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/tasks`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTasksLists(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mx-auto">
      tasks
      {console.log(tasksLists)}
    </div>
  );
};

export default TasksLists;
