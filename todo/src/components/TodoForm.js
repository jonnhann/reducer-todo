
import React, { useState, useReducer } from "react";

function TodoForm(props) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = e => {
    setNewTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewTask('');
    props.addTask(newTask, e)
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter a Task..."
        value={newTask}
        name="item"
        onChange={handleInputChange}
      />
      <button type="submit">add</button>
    </form>
  );
}

export default TodoForm;