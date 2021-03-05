import React, {useReducer} from 'react';
import {initialState, todoReducer} from './reducers/todoReducer';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

function App() {

  const [state,dispatch] = useReducer(todoReducer, initialState)

  const addTask = newTask => {
    dispatch({type: 'ADD_TASK', payload: newTask})
  }
  
  const toggleCompleted = id => {
    dispatch({type:'TOGGLE_COMPLETED',payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED'})
  }



 
  return (
    <div className='App'>
      <TodoForm addTask={addTask} />
      <TodoList tasks={state.tasks} toggleCompleted={toggleCompleted} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
