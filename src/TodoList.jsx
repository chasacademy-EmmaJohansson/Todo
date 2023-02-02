import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              text={todo.text}
              todo={todo}
              id={todo.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
