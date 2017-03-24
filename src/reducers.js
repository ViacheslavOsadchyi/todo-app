import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VISIBILITY_FILTERS } from './actions';
import { combineReducers } from 'redux';

function todos ( state = [], action ){
	switch ( action.type ){
		case TOGGLE_TODO:
			return state.map((todo)=>{
				if ( todo.index === action.index ){
					return Object.assign({},todo,{
						completed: !todo.completed
					});
				}
				return todo;
			});
		case ADD_TODO:
			return state.concat({
				index: 		Math.floor( Math.random() * new Date().getTime() ),
				text: 		action.text,
				completed: 	false					
			})
		default:
			return state;
	}	
}

function visibilityFilter ( state = VISIBILITY_FILTERS.SHOW_ALL, action ){
	switch ( action.type ){
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state;
	}	
}

const todoApp = combineReducers({
	visibilityFilter: visibilityFilter,
	todos: todos
});

export default todoApp;