import { useSelector, useDispatch } from "react-redux";
import "./App.css"
import {
  addTask,
  removeTask,
  updateTask,
  toggleTask,
} from "./features/todoSlice";
import { useState } from "react";

const Todolist = () => {
  const [input, setInput] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput("");
    }
  };

  const handleEditTask = (taskId, taskText) => {
    setEditTaskId(taskId);
    setEditInput(taskText);
  };

  const handleUpdateTask = () => {
    if (editInput.trim() && editTaskId !== null) {
      dispatch(updateTask({ id: editTaskId, text: editInput }));
      setEditTaskId(null);
      setEditInput("");
    }
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
    setEditInput("");
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
          className="todo-input"
        />
        <button onClick={handleAddTask} className="add-btn">Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {editTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  className="edit-input"
                />
                <button onClick={handleUpdateTask} className="save-btn">Save</button>
                <button onClick={handleCancelEdit} className="cancel-btn">Cancel</button>
              </>
            ) : (
              <>
                <span
                  className={`task-text ${task.completed ? "completed" : ""}`}
                  onClick={() => dispatch(toggleTask(task.id))}
                >
                  {task.text}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeTask(task.id))}
                >
                  Delete
                </button>
                <button
                  className="edit-btn"
                  onClick={() => handleEditTask(task.id, task.text)}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
