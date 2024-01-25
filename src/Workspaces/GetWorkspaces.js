import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GetWorkspaces.css';

const GetWorkspaces = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
       //const response = await axios.get('http://localhost:5006/api/Fabric/ListWorkspaces');
       const response = await axios.get('https://localhost:44310/api/Fabric/ListWorkspaces');

        if (response.data && response.data.Value && Array.isArray(response.data.Value)) {
          setWorkspaces(response.data.Value);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching workspaces:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return (
    <div>
      <h2>Get Workspaces</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="workspace-table">
          <thead>
            <tr>
              <th>ID</th>
              <th style={{ width: '20%' }}>Display Name</th>
              <th style={{ width: '25%' }}>Description</th>
              <th style={{ width: '10%' }}>Type</th>
              <th style={{ width: '20%' }}>Capacity ID</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(workspaces) && workspaces.length > 0 ? (
              workspaces.map(workspace => (
                <tr key={workspace.id}>
                  <td>{workspace.id}</td>
                  <td>{workspace.displayName}</td>
                  <td>{workspace.description}</td>
                  <td>{workspace.type}</td>
                  <td>{workspace.capacityId || 'N/A'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No workspaces available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetWorkspaces;
