export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VISIBILITY_FILTERS = {
	SHOW_ALL: 		'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 	'SHOW_ACTIVE'
}

export function addToDo ( text ){
	return {
		type: ADD_TODO,
		text
	}
}

export function toggleToDo ( index ){
	return {
		type: TOGGLE_TODO,
		index
	}
}

export function setVisibilityFilter ( filter ){
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}