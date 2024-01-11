// CreateWorkspacesForm.js
import React, { useState } from 'react';
import '../Workspaces/CreateWorkspaceItemForm.css'

const CreateItemForm = ({ values, onSubmit, onChange }) => {
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
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={values.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Worksapce ID:</label>
          <input
            type="text"
            name="workspaceId"
            value={values.workspaceId}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  };
  

export default CreateItemForm;
