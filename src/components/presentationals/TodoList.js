import React from 'react'
import Todo from './Todo';

function TodoList ( props ){
	return (
		<ul>
	    {props.todos.map(todo =>
	      <Todo
	        key={todo.index}
	        text={todo.text}
	        completed={todo.completed}
	        onClick={() => props.onTodoClick(todo.index)}
	      />
	    )}
  		</ul>
	);	
}

export default TodoList;