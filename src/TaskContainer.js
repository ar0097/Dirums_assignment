import React from "react";
import "./taskContainer.css";
import CardComponent from "./CardComponent";
import { useData } from "./CreateContext";

const TaskContainer = () => {
  const { storage } = useData();

  const todoTask = storage.filter((item) => {
    return item.status === "option1";
  });
  const inprogress = storage.filter((item) => {
    return item.status === "option2";
  });
  const completedTask = storage.filter((item) => {
    return item.status === "option3";
  });

  return (
    <div className="taskContainer container border rounded">
      <CardComponent title="Tasks to do" data={todoTask} />
      <CardComponent title="In progress" data={inprogress} />
      <CardComponent title="Tasks done" data={completedTask} />
    </div>
  );
};
export default TaskContainer;
