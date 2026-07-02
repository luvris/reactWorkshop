import { useState } from "react";
import TodoList from "../component/TodoList";
import TodoForm from "../component/TodoForm";

function App() {

  const [todos, setTodos] = useState([{ id: 1, text: "Task one" },
  { id: 2, text: "Task two" }
  ]);

  const [todosInput, setTodosInput] = useState("");

  function delTask(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function addTodos() {
    if (todosInput.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: todosInput
    };

    setTodos((prev) => [...prev, newTask]);
    setTodosInput("");
  }

  function handleInputChange(e) {
    setTodosInput(e.target.value);
  }

  return (
    <div>

      <TodoList
        todos={todos}
        onDel={delTask} />

      <TodoForm 
      onAddTodo={addTodos} 
      onInputChange={handleInputChange} 
      todosInput={todosInput} />

    </div>
  );

}
export default App;