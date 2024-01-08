// CreateWorkspacesForm.js
import React, { useState } from 'react';
import './CreateWorkspaceForm.css'

const CreateWorkspacesForm = ({ values, onSubmit, onChange }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(values);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      onChange({
        ...values,
        [name]: value,
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Display Name:</label>
          <input
            type="text"
            name="displayName"
            value={values.displayName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Capacity ID:</label>
          <input
            type="text"
            name="capacityId"
            value={values.capacityId}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  };
  

export default CreateWorkspacesForm;
