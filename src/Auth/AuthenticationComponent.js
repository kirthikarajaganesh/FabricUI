
import React, { useState, useEffect } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: '61940afb-6100-4596-9ba5-bdc1067462db',
    authority: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47',
    redirectUri: 'http://localhost:3000/',
    postLogoutRedirectUri: 'http://localhost:3000/',
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const loginRequest = {
  scopes: ['https://analysis.windows.net/powerbi/api/Lakehouse.ReadWrite.All'],
};

const App = () => {
  const [accessToken, setAccessToken] = useState('');
  const [userAccount, setUserAccount] = useState(null);

  const initializeMsal = async () => {
    try {
      console.log('Attempting MSAL initialization...');
      await msalInstance.handleRedirectPromise();
      console.log(msalInstance);
      console.log('MSAL initialization successful!');
    } catch (error) {
      console.error('MSAL initialization error:', error);
    }
  };

  const login = async () => {
    await initializeMsal(); // Ensure MSAL is initialized before attempting login

    try {
      console.log('Attempting login...');
      await msalInstance.loginRedirect(loginRequest);
    } catch (error) {
      console.error('Login Error:', error);
      // Handle login error
    }
  };


  const fetchAccessToken = async (account) => {
    try {
      const silentRequest = {
        scopes: loginRequest.scopes,
        account: account,
      };
      
      const tokenResponse = await msalInstance.acquireTokenSilent(silentRequest);
      console.log(tokenResponse);
       
      setAccessToken(tokenResponse.accessToken);
      console.log('Access Token:', tokenResponse.accessToken);
      setUserAccount(account); // Set the user account details
    } catch (error) {
      // Check if the error is due to interaction_required and retry with popup
      if (error.name === 'InteractionRequiredAuthError') {
        console.log('Retrying with interactive login...');
        await msalInstance.loginPopup(loginRequest);
      } else {
        console.error('Silent Token Error:', error);
        // Handle other silent token acquisition failures
      }
    }
  };
  
  useEffect(() => {
    const initializeMsal = async () => {
      await msalInstance.initialize(); // Initialize MSAL instance
    };

    initializeMsal();
  }, []);
  

  useEffect(() => {
    // Check if a user is already signed in
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      // If the user is signed in, fetch the access token
      fetchAccessToken(accounts[0]);
    }
  }, []); // Run once on component mount

  return (
    <div>
      <h1>MSAL React Integration</h1>
      {userAccount ? (
        <div>
          <p>Welcome, {userAccount.name}!</p>
          <p>Email: {userAccount.username}</p>
          <p>Access Token:</p>
          <pre>{accessToken}</pre>
          {/* Add your code to call backend APIs using the accessToken */}
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default App;
