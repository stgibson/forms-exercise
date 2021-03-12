import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
  const initFormData = { task: "" };
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(formData.task);
    setFormData(initFormData);
  };

  return (
    <form className="NewTodoForm" onSubmit={ handleSubmit }>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        className="NewTodoForm-input"
        name="task"
        type="text"
        onChange={ handleChange }
        value={ formData.task }
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;