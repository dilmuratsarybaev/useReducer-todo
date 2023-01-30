import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Reducer } from "./Reducer";

const initialState = JSON.parse(localStorage.getItem("AUTHO")) || { todos: [] };

function App() {
  const [todos, dispathTodos] = useReducer(Reducer, initialState);
  const [inputText, setInputText] = useState("");
  const [edit, setEdit] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);

  useEffect(() => {
    localStorage.setItem("AUTHO", JSON.stringify(todos));
  }, [todos]);

  const toggleComplete = (id) => {
    dispathTodos({ type: "COMPLETE_TODO", id: id });
  };

  const removeTodo = (id) => {
    dispathTodos({ type: "DELETE_TODO", id: id });
  };
  console.log(todos.todos);
  return (
    <div>
      <h1 className="headinOne">React Todo</h1>
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        edit={edit}
        setEdit={setEdit}
        // todos={todos}
        dispathTodos={dispathTodos}
        editingTodoId={editingTodoId}
      />
      <TodoList
        todos={todos.todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        setInputText={setInputText}
        setEdit={setEdit}
        setEditingTodoId={setEditingTodoId}
      />
    </div>
  );
}

export default App;
