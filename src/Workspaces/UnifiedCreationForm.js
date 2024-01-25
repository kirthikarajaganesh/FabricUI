// UnifiedCreationForm.js
import React from 'react';
import './UnifiedCreationForm.css';

const UnifiedCreationForm = ({ values, onChange, onMixinButtonClick }) => {
  const handleButtonClick = () => {
    if (onMixinButtonClick) {
      onMixinButtonClick();
    }
  };

  return (
    <form>
      <div>
        <label>Workspace DisplayName:</label>
        <input
          type="text"
          name="workspaceDisplayName"
          value={values.workspaceDisplayName}
          onChange={(e) => onChange({ ...values, workspaceDisplayName: e.target.value })}
        />
      </div>
      <div>
        <label>Workspace Description:</label>
        <input
          type="text"
          name="workspaceDescription"
          value={values.workspaceDescription}
          onChange={(e) => onChange({ ...values, workspaceDescription: e.target.value })}
        />
      </div>
      <div>
        <label>Item DisplayName:</label>
        <input
          type="text"
          name="itemDisplayName"
          value={values.itemDisplayName}
          onChange={(e) => onChange({ ...values, itemDisplayName: e.target.value })}
        />
      </div>
      <div>
        <label>Item Type:</label>
        <input
          type="text"
          name="itemType"
          value={values.itemType}
          onChange={(e) => onChange({ ...values, itemType: e.target.value })}
        />
      </div>
      <div>
        <label>Workspace ID:</label>
        <input
          type="text"
          name="workspaceId"
          value={values.workspaceId}
          onChange={(e) => onChange({ ...values, workspaceId: e.target.value })}
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
        <button type="button" onClick={handleButtonClick}>
          Mixin
        </button>
      </div>
    </form>
  );
};

export default UnifiedCreationForm;
