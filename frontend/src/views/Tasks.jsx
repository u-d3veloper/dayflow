import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({ name: "", description: "", duration: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewTask({ name: "", description: "", duration: "" });
  };

  const handleAddTask = () => {
    if (newTask.duration.trim() === "" || newTask.name.trim() === "") {
      alert("Title and duration are required!");
      return;
    }
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    handleClose();
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <Box sx={{ width: "100%", boxSizing: "border-box", padding: "20px" }}>
      <Typography
        variant="h3"
        component="div"
        sx={{ fontWeight: "bold", textAlign: "left" }}
      >
        Goals
      </Typography>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ marginTop: "20px" }}
      >
        Add New Task
      </Button>
      <List sx={{ bgcolor: "background.paper", paddingTop: "20px" }}>
        {tasks.map((task, index) => (
          <ListItem
            sx={{
              border: "1px solid #E0E0E0",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
            key={index}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={task.name}
              secondary={
                <>
                  <Typography component="span">
                    {task.description || "No description"}
                  </Typography>
                  <br />
                  <Typography component="span" color="textSecondary">
                    Duration: {task.duration} minutes
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            variant="standard"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            variant="standard"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Duration (minutes)"
            fullWidth
            variant="standard"
            value={newTask.duration}
            onChange={(e) => setNewTask({ ...newTask, duration: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddTask}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TodoList;
