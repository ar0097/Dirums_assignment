import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DatePicker from "@mui/lab/DatePicker";
import AddIcon from "@mui/icons-material/Add"; // Import the Add icon

const Header = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskState, setTaskState] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasksList, setTasksList] = useState([]);

  const handleCreateTaskClick = () => {
    setOpenDialog(true);
  };

  const handleCreateTask = () => {
    const newTask = {
      name: taskName,
      state: taskState,
      dueDate: selectedDate
    };

    setTasksList((prevTasks) => [...prevTasks, newTask]);

    setOpenDialog(false);

    setTaskName("");
    setTaskState("");
    setSelectedDate(null);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {/* Left side */}
          <div style={{ flexGrow: 1 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                color="inherit"
                startIcon={<AddIcon />} // Add the Add icon as a start icon
                onClick={handleCreateTaskClick}
              >
                Create Task
              </Button>
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                style={{ marginLeft: "28px" }}
              />
            </div>
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">Arbaz Shah</Typography>
            <Avatar style={{ marginLeft: "8px" }} />
          </div>
        </Toolbar>
      </AppBar>

      {/* Create Task Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogContent>
          <TextField
            label="Task Name"
            fullWidth
            variant="outlined"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <TextField
            select
            label="Task State"
            fullWidth
            variant="outlined"
            value={taskState}
            onChange={(e) => setTaskState(e.target.value)}
          >
            <MenuItem value="todo">To-Do</MenuItem>
            <MenuItem value="inProgress">In Progress</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </TextField>
          <DatePicker
            label="Due Date"
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateTask}
          >
            Create
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
