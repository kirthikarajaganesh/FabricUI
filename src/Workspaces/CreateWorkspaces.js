import React, { useState } from 'react';
import CreateWorkspacesForm from './CreateWorkspaceForm';
import axios from 'axios';

const CreateWorkspaces = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [formData, setFormData] = useState({
    displayName: '',
    description: '',
    capacityId: '',
  });
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formValues) => {
    try {
      setLoading(true);

      const response = await axios.post('https://localhost:44310/api/Fabric/CreateWorkspace', formValues, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('API Response:', response.data);
      
      // Assuming your backend API returns a success message
      setApiResponse(response.data.message || 'Workspace created successfully!');

      // Reset form values to empty
      setFormData({
        displayName: '',
        description: '',
        capacityId: '',
      });
    } catch (error) {
      console.error('API Error:', error);
      setApiResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Workspaces</h2>
      <CreateWorkspacesForm
        values={formData}
        onSubmit={handleFormSubmit}
        onChange={(updatedValues) => setFormData(updatedValues)}
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {loading ? <p>Loading...</p> : (apiResponse && <p>{apiResponse}</p>)}
      </div>
    </div>
  );
};

export default CreateWorkspaces;
