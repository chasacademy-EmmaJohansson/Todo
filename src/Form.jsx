import React from "react";

let count = 1;
function Form({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: count++ }]);
    setInputText("");
  };
  return (
    <form>
      <input
        className="p-2 border-amber-300 md:p-1 border-4 rounded-lg mr-3"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
      />
      <button
        className="border-amber-400 border-4 border-double font-bold text-lg p-2 bg-orange-300 rounded-lg text-orange-700 hover:bg-orange-400"
        onClick={submitTodoHandler}
        type="submit"
      >
        ADD
      </button>
    </form>
  );
}

export default Form;
