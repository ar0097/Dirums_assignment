import React from "react";
import "./card.css";
import { useData } from "./CreateContext";

const CardComponent = ({ title, data }) => {
  const colors = [
    "#FBF0B2",
    "#FFC7EA",
    "#D8B4F8",
    "#CAEDFF",
    "#96B6C5",
    "#ADC4CE",
    "#7EAA92"
  ];
  const {
    handleEditOpen,
    setSelectedValue,
    setDate,
    setDescription,
    setEditId
  } = useData();

  return (
    <div className="cardComp">
      <h6 className="text-success">{title}</h6>
      <hr />
      <div className="tasksContainer">
        {data.length > 0 ? (
          data.map((task) => {
            return (
              <div
                onClick={() => {
                  setSelectedValue(task.status);
                  setDate(task.date);
                  setDescription(task.desc);
                  setEditId(task.id);
                  handleEditOpen();
                }}
                className="task"
                key={task.id}
                style={{
                  backgroundColor:
                    colors[Math.floor(Math.random() * colors.length)]
                }}
              >
                <p>{task.desc}</p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Due Date</span>:{" "}
                  {task.date}
                </p>
              </div>
            );
          })
        ) : (
          <div
            className="task"
            style={{
              backgroundColor: colors[Math.floor(Math.random() * colors.length)]
            }}
          >
            <p className="text-danger">No Tasks Available ...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default CardComponent;
