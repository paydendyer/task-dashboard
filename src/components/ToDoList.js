//Returns an unordered list
import React from 'react';

const todos = ["Finish project", "Read book", "Clean apartment", "Do Laundry"];
const Todo = props => <li>{props.todo}</li>;

const TodoList = () => {
  return(
    <ul>
      {todos.map(todo => (      //returns a new array with a listitem for every todo
        <Todo todo={todo}key={todo}></Todo>
      ))}
    </ul>
  )
}

export default TodoList;