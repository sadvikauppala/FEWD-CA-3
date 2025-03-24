import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div>
    {tasks.length > 0 ? (
      tasks.map((task, index) => <TaskItem key={index} task={task} />)
    ) : (
      <p>No tasks available.</p>
    )}
  </div>
  );
};

export default TaskList;



  