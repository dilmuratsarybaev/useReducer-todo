import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 2rem auto;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-family: cursive;
  font-weight: 600;
  border-radius: 0.5rem;
`;
const StyledButton = styled.button`
  margin-right: 0.5rem;
  padding: 0.3rem 1rem;
  background-color: black;
  color: red;
`;
const StyledInput = styled.input`
  border: 2px solid black;
  margin-left: 0.5rem;
`;
export const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };
  const handleRemoveClick = () => {
    // console.log(todo.id);
    removeTodo(todo.id);
  };
  return (
    <StyledDiv>
      <StyledInput type="checkbox" onClick={handleCheckboxClick} />
      <li style={{ textDecoration: todo.completed ? "line-through" : null }}>
        {todo.task}
      </li>
      <StyledButton onClick={handleRemoveClick}>X</StyledButton>
    </StyledDiv>
  );
};
