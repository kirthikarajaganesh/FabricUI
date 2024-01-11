import logo from './logo.svg';
import './App.css';
import CreateWorkspace from './Workspaces/CreateWorkspaces';
import UpdateWorkspace from './Workspaces/UpdateWorkspace';
import DeleteWorkspace from './Workspaces/DeleteWorkspace';
import GetWorkspaces from './Workspaces/GetWorkspaces';
import CreateItem from './Items/CreateItem';
import Tabs from './Workspaces/Tabs';
import AuthenticationComponent from './Auth/AuthenticationComponent';


function App() {
  return (
    // <div>
    // <h1>Your Main Application</h1>
    // <AuthenticationComponent />
    // </div>
    
    <div>
      <h1>Workspace and Item Management For Fabric</h1>
      <Tabs>
        <div label="Get Workspaces">
          <GetWorkspaces />
        </div>
        <div label="Create Workspace">
          <CreateWorkspace />
        </div>
        <div label="Update Workspace">
          <UpdateWorkspace />
        </div>
        <div label="Delete Workspace">
          <DeleteWorkspace />
        </div>
        <div label="Create Item">
          <CreateItem/>
        </div>
        
      </Tabs>
    </div>
  );
}

export default App;
