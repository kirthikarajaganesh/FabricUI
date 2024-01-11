// CreateItem.js
import React, { useState } from 'react';
import CreateItemForm from './CreateItemForm';
import axios from 'axios';

const CreateItem = () => {
    const [apiResponse, setApiResponse] = useState(null);
    const [formData, setFormData] = useState({
      displayName: '',
      type: '',
      workspaceId: '',
    });
  
    const handleFormSubmit = async (formValues) => {
      try {
        
        const response = await axios.post('https://localhost:44310/api/Fabric/CreateItem', formValues, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('API Response:', response.data);
        
        // Assuming your backend API returns a success message
        setApiResponse(response.data.message || 'item created successfully!');

        // Reset form values to empty
        setFormData({
            displayName: '',
            type: '',
            workspaceId: '',
        });
      } catch (error) {
        console.error('API Error:', error);
        setApiResponse(`Error: ${error.message}`);
      }
    };
  
    return (
      <div>
        <h2>Create Item</h2>
        <CreateItemForm
          values={formData}
          onSubmit={handleFormSubmit}
          onChange={(updatedValues) => setFormData(updatedValues)}
        />
         <div style={{ textAlign: 'center', marginTop: '10px' }}>
            {apiResponse && <p>{apiResponse}</p>}
        </div>
      </div>
    );
};

export default CreateItem;


