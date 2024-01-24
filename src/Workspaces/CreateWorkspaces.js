// CreateWorkspaces.js
import React, { useState } from 'react';
import CreateWorkspacesForm from './CreateWorkspaceForm';
import axios from 'axios';

const CreateWorkspaces = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    description: '',
    capacityId: '',
  });

  const handleLibraryButtonClick = async () => {
    try {
      setLoading(true);

     // const response = await axios.post('http://localhost:5006/api/Fabric/CreateWorkspace', {
      const response = await axios.post('https://localhost:44310/api/Fabric/CreateWorkspace', {
       
        displayName: formData.displayName,
        description: formData.description,
        // capacityId: '', // Exclude the capacityId from the payload
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Library API Response:', response.data);

      // Assuming your backend API returns a success message
      setApiResponse(response.data.message || 'Workspace created successfully!');
      
      // Reset form values to empty
      setFormData({ displayName: '', description: '', capacityId: '' });

    } catch (error) {
      console.error('Library API Error:', error);

      // Handle the error as needed
      setApiResponse(`Error: ${error.message}`);

    } finally {
      setLoading(false);
    }
  };
  const handleMixinButtonClick = async () => {
    try {
      setLoading(true);

     // const response = await axios.post('http://localhost:5006/api/Fabric/CallMixin', {
    const response = await axios.post('https://localhost:44310/api/Fabric/CallMixin', {
        
        displayName: formData.displayName,
        description: formData.description,
        capacityId: formData.capacityId
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Library API Response:', response.data);

      // Assuming your backend API returns a success message
      setApiResponse('Porter process started successfully.');
      
      // Reset form values to empty
      setFormData({ displayName: '', description: '', capacityId: '' });

    } catch (error) {
      console.error('Library API Error:', error);

      // Handle the error as needed
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
        onChange={(updatedValues) => setFormData(updatedValues)}
        onLibraryButtonClick={handleLibraryButtonClick}
        onMixinButtonClick={handleMixinButtonClick}
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {loading ? <p>Loading...</p> : (apiResponse && <p>{apiResponse}</p>)}
      </div>
    </div>
  );
};

export default CreateWorkspaces;
