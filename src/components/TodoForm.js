import styled from "styled-components";

export const TodoForm = ({
  setInputText,
  inputText,
  edit,
  setEdit,
  dispathTodos,
  editingTodoId,
}) => {
  const inputChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  const submitHandle = (event) => {
    event.preventDefault();
    dispathTodos({
      type: "ADD_TODO",
      payload: {
        task: inputText,
        id: Math.random().toString(),
        complete: false,
      },
    });
    setInputText("");
  };

  const saveEditedTodo = (e) => {
    e.preventDefault();
    dispathTodos({
      type: "EDIT_TODO",
      inputText: inputText,
      editingTodoId: editingTodoId,
    });
    setEdit(false);
    setInputText("");
  };

  return (
    <StyledForm>
      <StyledInput
        name="task"
        type="text"
        value={inputText}
        onChange={inputChangeHandler}
      />
      {edit ? (
        <StyledButton
          type="submit"
          onClick={saveEditedTodo}
          disabled={!inputText}
        >
          Update
        </StyledButton>
      ) : (
        <StyledButton
          type="submit"
          onClick={submitHandle}
          disabled={!inputText}
        >
          Submit
        </StyledButton>
      )}
    </StyledForm>
  );
};

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
