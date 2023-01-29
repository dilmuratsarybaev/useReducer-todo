import React from "react";
import styled from "styled-components";

export const Todo = ({
  todo,
  toggleComplete,
  removeTodo,
  setInputText,
  setEdit,
  setEditingTodoId
}) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };
  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };
  const handleEditClick = () => {
    setInputText(todo.task);
    setEditingTodoId(todo.id)
    setEdit(true);
  };
  return (
    <StyledDiv>
      <StyledInput type="checkbox" onClick={handleCheckboxClick} />
      <li style={{ textDecoration: todo.completed ? "line-through" : null }}>
        {todo.task}
      </li>
      <ContainerButtons>
    
        <StyledButtonEdit onClick={handleEditClick} >Edit</StyledButtonEdit>  
    
      
        <StyledButton onClick={handleRemoveClick}>X</StyledButton>
      </ContainerButtons>
    </StyledDiv>
  );
};

const StyledButtonEdit = styled.button`
  padding:0.3rem 0.5rem;
  margin-right: 1rem;
  background-color: yellow;
  font-weight:700;
`;

const ContainerButtons = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #fff;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
