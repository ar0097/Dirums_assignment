import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useData } from "./CreateContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: "0px 0px 3px black",
  p: 4
};

export default function EditModal() {
  const {
    editOpen,
    handleEditClose,
    editId,
    setStorage,
    storage,
    selectedValue,
    setSelectedValue,
    date,
    setDate,
    description,
    setDescription,
    setEditId
  } = useData();

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleRadio = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const data = storage.filter((item) => {
      return item.id !== editId;
    });
    setStorage(data);

    setSelectedValue("option1");
    setDate("");
    setDescription("");
    setEditId("");
    handleEditClose();
  };
  const handleEdit = () => {
    setStorage([
      ...storage.map((task) => {
        return editId === task.id
          ? { ...task, desc: description, status: selectedValue, date: date }
          : task;
      })
    ]);
    setSelectedValue("option1");
    setDate("");
    setDescription("");
    setEditId("");
    handleEditClose();
  };
  return (
    <div>
      <Modal
        open={editOpen}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3 className="text-primary">Edit The Task for the team</h3>
          <hr />
          <form className="form-group">
            <label className="form-label text-success">
              Add task description
            </label>
            <textarea
              onChange={handleDescription}
              className="form-control"
              cols="40"
              rows="5"
              required={true}
              value={description}
            ></textarea>
            <label className="form-label text-success">
              Select Task Status
            </label>
            <div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="option1"
                  checked={selectedValue === "option1"}
                  onChange={handleRadio}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Todo
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="option2"
                  checked={selectedValue === "option2"}
                  onChange={handleRadio}
                />
                <label class="form-check-label" for="inlineRadio2">
                  In progress
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="option3"
                  checked={selectedValue === "option3"}
                  onChange={handleRadio}
                />
                <label class="form-check-label" for="inlineRadio3">
                  Tasks done
                </label>
              </div>
            </div>
            <label className="form-label text-success">Due date</label>
            <input
              type="date"
              required={true}
              onChange={handleDate}
              className="form-control"
              value={date}
            />
            <div className="mt-2 d-flex justify-content-evenly">
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete task
              </button>
              <button className="btn btn-success" onClick={handleEdit}>
                Update task
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
