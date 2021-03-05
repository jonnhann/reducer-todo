import React from 'react';
import './Todo.css'

function Todo(props) {
	return (
		<div
			onClick={() => props.toggleCompleted(props.task.id)}
			className={props.task.completed ? 'completed' : ''}>
			{props.task.item}
		</div>
	);
}

export default Todo;
