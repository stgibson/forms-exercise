import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  const initFormData = { width: "", height: "", color: "" };
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox(formData.width, formData.height, formData.color);
    setFormData(initFormData);
  };

  return (
    <form className="NewBoxForm" onSubmit={ handleSubmit }>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        type="number"
        min="1"
        value={ formData.width }
        onChange={ handleChange }
      />
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        type="number"
        min="1"
        value={ formData.height }
        onChange={ handleChange }
      />
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        type="text"
        min="1"
        value={ formData.color }
        onChange={ handleChange }
      />
      <button type="submit">Add Box</button>
    </form>
  );
};

export default NewBoxForm;