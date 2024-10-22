import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  initialState,
  name: "todos",
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id == action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task
      );
    },
  },
});

export const { addTask, toggleTask, removeTask, updateTask } =
  todoSlice.actions;
export default todoSlice.reducer;
