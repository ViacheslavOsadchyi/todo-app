import React from 'react'
import {VISIBILITY_FILTERS, toggleToDo} from '../../actions';
import {connect} from 'react-redux';
import TodoList from '../presentationals/TodoList';

function getVisibleTodos ( todos, visibilityFilter ){
	switch ( visibilityFilter ){
		case VISIBILITY_FILTERS.SHOW_ALL:
			return todos;
		case VISIBILITY_FILTERS.SHOW_ACTIVE:
			return todos.filter(todo=>!todo.completed);
		case VISIBILITY_FILTERS.SHOW_COMPLETED:
			return todos.filter(todo=>todo.completed);
	}
}

function mapStateToProps ( state ){
	return {
		todos: getVisibleTodos( state.todos, state.visibilityFilter )
	}
}

function mapDispatchToProps ( dispatch ){
	return {
		onTodoClick: (id)=>{
			dispatch(toggleToDo(id));
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;