// CreateWorkspaces.js
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
  
    const handleFormSubmit = async (formValues) => {
      try {
        // Make an Axios POST request to your backend API
       // const response = await axios.post('https://localhost:44310/api/Fabric', formValues);
        const response = await axios.post('https://localhost:44310/api/Fabric', formValues, {
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
            {apiResponse && <p>{apiResponse}</p>}
        </div>
      </div>
    );
};

export default CreateWorkspaces;



// CreateWorkspace.js
// import React, { useState } from 'react';
// import CreateWorkspacesForm from './CreateWorkspaceForm';

// const CreateWorkspaces = () => {
//     const [apiResponse, setApiResponse] = useState(null);
//     const [formData, setFormData] = useState({
//       displayName: '',
//       description: '',
//       capacityId: '',
//     });
  
//     const handleFormSubmit = async (formValues) => {
//       try {
//         // Simulate a successful API call (replace with actual API call)
//         await simulateApiCall(formValues);
//         setApiResponse('Workspace created successfully!');
//         // Reset form values to empty
//         setFormData({
//           displayName: '',
//           description: '',
//           capacityId: '',
//         });
//       } catch (error) {
//         console.error('API Error:', error);
//         setApiResponse(`Error: ${error.message}`);
//       }
//     };
  
//     // Simulate the API call function
//     const simulateApiCall = async (formValues) => {
//       // Simulating a successful API call with a delay
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log('Simulated API call successful:', formValues);
//           resolve();
//         }, 1000); // Simulating a delay of 1 second
//       });
//     };
  
//     return (
//       <div>
//         <h2>Create Workspaces</h2>
//         <CreateWorkspacesForm
//           values={formData}
//           onSubmit={handleFormSubmit}
//           onChange={(updatedValues) => setFormData(updatedValues)}
//         />
//          <div style={{ textAlign: 'center', marginTop: '10px' }}>
//             {apiResponse && <p>{apiResponse}</p>}
//         </div>
//       </div>
//     );
//   };
  
  
//   export default CreateWorkspaces;