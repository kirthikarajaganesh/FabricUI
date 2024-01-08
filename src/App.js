import logo from './logo.svg';
import './App.css';
import CreateWorkspace from './Workspaces/CreateWorkspace';
import UpdateWorkspace from './Workspaces/UpdateWorkspace';
import DeleteWorkspace from './Workspaces/DeleteWorkspace';
import GetWorkspaces from './Workspaces/GetWorkspaces';
import Tabs from './Workspaces/Tabs';


function App() {
  return (
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
      </Tabs>
    </div>
  );
}

export default App;
