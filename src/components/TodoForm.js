import React, { useReducer, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 25rem;
  background-color: #fff;
  margin: 2rem auto;
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: none;
`;
const StyledInput = styled.input`
  border: 2px solid green;
  margin-right: 1rem;
  padding: 0.3rem;
  border-radius: 0.5rem;
  width: 17rem;
`;

const StyledButton = styled.button`
  background-color: green;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: #fff;
  &:focus {
    color: green;
    background-color: black;
  }
`;
export const TodoForm = ({ addTodo }) => {
  const todoReducer = (state, action) => {
    // console.log(action)
    if (action.type === "CHANGE_TODO_VALUE") {
      return {
        ...state,
        task: action.paylaod,
      };
    }
  };

  const [todoState, disPatchTodo] = useReducer(todoReducer, {
    id: "",
    task: "",
    completed: false,
  });
 
  
  const handleTaskInputChange = (event) => {
    disPatchTodo({ type: "CHANGE_TODO_VALUE", paylaod: event.target.value });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    if (todoState.task.trim()) {
      addTodo({ ...todoState, id: Math.random().toString() });
    }
    disPatchTodo({type: "CHANGE_TODO_VALUE", paylaod:""});
  };
//   console.log(todoState.task)
  return (
    <StyledForm>
      <StyledInput
        name="task"
        type="text"
        value={todoState.task}
        onChange={handleTaskInputChange}
      />
      <StyledButton type="submit" onClick={submitHandle}>
        Submit
      </StyledButton>
    </StyledForm>
  );
};
