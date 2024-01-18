// CreateWorkspacesForm.js
import React from 'react';
import './CreateWorkspaceItemForm.css';

const CreateWorkspacesForm = ({ values, onChange, onLibraryButtonClick, onMixinButtonClick }) => {
  const handleButtonClick = (selectedValue) => {
    if (selectedValue === 'Mixin' && onMixinButtonClick) {
      // Call the provided callback for the Mixin button click
      // onChange({
      //   ...values,
      //   capacityId: selectedValue,
      // });
      onMixinButtonClick();
    } else if (selectedValue === 'Library' && onLibraryButtonClick) {
      // Call the provided callback for the Library button click
      onLibraryButtonClick();
    }
  };

  return (
    <form>
      <div>
        <label>Display Name:</label>
        <input
          type="text"
          name="displayName"
          value={values.displayName}
          onChange={(e) => onChange({ ...values, displayName: e.target.value })}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={(e) => onChange({ ...values, description: e.target.value })}
        />
      </div>
      <div>
        <label>Capacity ID:</label>
        <input
          type="text"
          name="capacityId"
          value={values.capacityId}
          onChange={(e) => onChange({ ...values, capacityId: e.target.value })}
        />
      </div>
      <div>
        <button type="button" onClick={() => handleButtonClick('Library')}>
          Library
        </button>
        <span style={{ margin: '0 8px' }}></span>
        <button type="button" onClick={() => handleButtonClick('Mixin')}>
          Mixin
        </button>
      </div>
    </form>
  );
};

export default CreateWorkspacesForm;
