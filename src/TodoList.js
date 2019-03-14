import React from 'react';
import {Todo} from './Todo'

function TodoList(props) {
  const todos = props.todos;
  const listItems = todos.map((todo) =>
    <li key={todo.toString()}>
      {todo}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const todos = ["Hacer labs", "Terminar proyecto"];
ReactDOM.render(
  <TodoList todos={todos} />,
  document.getElementById('root')
);