import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className=" flex justify-between p-1  mt-4 w-72 border-4 rounded-lg  border-amber-200 bg-white">
      <div>
        <li
          className={`${
            todo.completed
              ? " line-through font-bold text-md text-amber-800 ml-3 "
              : "font-bold text-md text-amber-800 ml-3"
          }`}
        >
          {text}
        </li>
      </div>

      <div className="flex gap-2">
        <button
          className="border-amber-400 border-1 border-double font-medium text-sm pr-1 pl-1 bg-orange-300 rounded-lg text-orange-700 hover:bg-orange-400"
          onClick={completeHandler}
        >
          Done
        </button>
        <button
          className="border-amber-400 border-4 border-double font-medium text-sm pr-1 pl-1 bg-orange-300 rounded-lg text-orange-700 hover:bg-orange-400"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Todo;
