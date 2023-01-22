import { useEffect, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodo = JSON.parse(localStorage.getItem("AUTHO"));
    // console.log(storageTodo);
    if (storageTodo) {
      setTodos(storageTodo);
    }
  }, []);
  // useEffect(() => {
  //   // console.log(JSON.stringify(todos))
  // }, [todos]);

  const addTodo = (todo) => {
    console.log(todo);
    setTodos([todo, ...todos]);
    
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodo);
    localStorage.setItem("AUTHO", JSON.stringify(filteredTodo));
  };
  return (
    <div>
      <h1 className="headinOne">React Todo</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
