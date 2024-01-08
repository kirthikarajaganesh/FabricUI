// GetWorkspaces.js
import React from 'react';
import workspacesData from '../../src/SimulationValues/GetWorkspaces.json';
import './GetWorkspaces.css'

const GetWorkspaces = () => {
    const { workspaces } = workspacesData;
  
    return (
      <div>
        <h2>Get Workspaces</h2>
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
            {workspaces.map(workspace => (
              <tr key={workspace.id}>
                <td>{workspace.id}</td>
                <td>{workspace.displayName}</td>
                <td>{workspace.description}</td>
                <td>{workspace.type}</td>
                <td>{workspace.capacityId || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default GetWorkspaces;
