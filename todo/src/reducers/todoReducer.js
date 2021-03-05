export const initialState = {
	tasks: [
		{
			item: 'Learn about reducers',
			completed: false,
			id: 3892987589,
		},
	],
};

export const todoReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_COMPLETED':
			return {
                ...state,
                tasks: [...state.tasks].map(task => {
                  if (task.id === action.payload) {
                    return { ...task, completed: !task.completed };
                  } else {
                    return task;
                  }
                })
              };
		case 'ADD_TASK':
			const newTask = {
				item: action.payload,
				completed: false,
				id: Date.now(),
			};
			return {
				...state,
				tasks: [...state.tasks, newTask],
			};
		case 'CLEAR_COMPLETED':
			return {
				...state,
				tasks: state.tasks.filter((task) => !task.completed),
            };
            default: 
            return state;
	}
};
