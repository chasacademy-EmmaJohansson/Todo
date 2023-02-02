import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center mt-11">
      <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-amber-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full text-center h-96 w-96 bg-gradient-to-r from-amber-500 to-amber-700 border-double border-8 border-yellow-500 rounded-xl">
        <header className="font-extrabold text-3xl mt-4 mb-7 text-amber-200 underline decoration-1">
          Todo List
        </header>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
        <div className="flex items-center justify-center">
          <TodoList setTodos={setTodos} todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
