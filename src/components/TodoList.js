import React from "react";
import styled from "styled-components";
import { Todo } from "./Todo";

export const TodoList = ({
  todos,
  toggleComplete,
  removeTodo,
  updateTodo,
  setInputText,
  setEdit,
  setEditingTodoId
}) => {

  return (
    <StyledUl>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            setInputText={setInputText}
            setEdit={setEdit}
            setEditingTodoId={setEditingTodoId}
          />
        );
      })}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  background-color: #fff;
  width: 25rem;
  margin: 0 auto;
  border-radius: 0.5rem;
`;
