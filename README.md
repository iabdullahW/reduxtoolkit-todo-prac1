<!-- import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice"

export const store = configureStore({
reducer:{
todos:todoReducer,
}
})

import { createSlice } from "@reduxjs/toolkit";

const initialState={
tasks:[],
};

const todoSlice = createSlice({
name:"todos",
initialState:initialState,
reducers:{
addTask:(state,action)=>{
state.tasks.push({id:Date.now(),text:action.payload,completed:false});
},
toggleTask:(state,action)=>{
const task = state.tasks.find((task)=>task.id === action.payload);
if(task){
task.completed = !task.completed;
}
},
removeTask:(state,action)=>{
state.tasks= state.tasks.filter((task)=>task.id !== action.payload);
}
}
})

export const {addTask,toggleTask,removeTask} = todoSlice.actions;
export default todoSlice.reducer;

import React from 'react'
import TodoList from './TodoList'

const App = () => {
return (

<div>
<TodoList/>
</div>
)
}

export default App

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask, removeTask } from './features/todoSlice';

const TodoList = () => {
const [input, setInput] = useState('');
const tasks = useSelector((state) => state.todos.tasks);
const dispatch = useDispatch();

const handleAddTask = () => {
if (input.trim()) {
dispatch(addTask(input));
setInput('');
}
};

return (

<div style={{ textAlign: 'center', backgroundColor: 'aqua', color: 'black',height: '100vh',width:'100vw',margin:'0' ,padding:'0'}} >
<div>
<h1>To-Do List</h1>
<input
type="text"
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Add a task"
/>
<button onClick={handleAddTask}>Add Task</button>

<ul>
{tasks.map((task) => (
<li key={task.id}>
<span
style={{
textDecoration: task.completed ? 'line-through' : 'none',
}}
onClick={() => dispatch(toggleTask(task.id))}
>
{task.text}
</span>
<button
style={{backgroundColor: 'red',color:'white',padding:'5px',borderRadius:'5px',radius:"5px",margin:"5px", hover:"blue"}}
onClick={() => dispatch(removeTask(task.id))}

> Delete
> </button>

</li>
))}
</ul>
</div>
</div>
);
};

export default TodoList; -->
