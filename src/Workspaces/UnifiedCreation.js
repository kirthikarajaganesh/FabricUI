// UnifiedCreation.js
import React, { useState } from 'react';
import UnifiedCreationForm from './UnifiedCreationForm';
import axios from 'axios';

const UnifiedCreation = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    workspaceDisplayName: '',
    workspaceDescription: '',
    itemDisplayName: '',
    itemType: '',
    //workspaceId: '',
    capacityId: '',
  });

  const handleMixinButtonClick = async () => {
    try {
      setLoading(true);

      // const response = await axios.post('http://localhost:5006/api/Fabric/CallMixin', {
      const response = await axios.post('https://localhost:44310/api/Fabric/CallMixin', {
        workspaceDisplayName: formData.workspaceDisplayName,
        workspaceDescription: formData.workspaceDescription,
        itemDisplayName: formData.itemDisplayName,
        itemType: formData.itemType,
       // workspaceId: formData.workspaceId,
        capacityId: formData.capacityId,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Mixin API Response:', response.data);

      // Assuming your backend API returns a success message
      setApiResponse('Porter process started successfully.');

      // Reset form values to empty
      setFormData({
        workspaceDisplayName: '',
        workspaceDescription: '',
        itemDisplayName: '',
        itemType: '',
        //workspaceId: '',
        capacityId: '',
      });

    } catch (error) {
      console.error('Mixin API Error:', error);

      // Handle the error as needed
      setApiResponse(`Error: ${error.message}`);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create Workspaces and Item</h2>
      <UnifiedCreationForm
        values={formData}
        onChange={(updatedValues) => setFormData(updatedValues)}
        onMixinButtonClick={handleMixinButtonClick}
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {loading ? <p>Loading...</p> : (apiResponse && <p>{apiResponse}</p>)}
      </div>
    </div>
  );
};

export default UnifiedCreation;
