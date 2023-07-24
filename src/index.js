import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Profile from "./profile"
import { Auth0Provider } from '@auth0/auth0-react';
import UPI from './UPIpage';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>

    <Auth0Provider
      domain="dev-vb8vd6gs52h6qg7j.us.auth0.com"
      clientId="BjiH1gTDlpcQMo8JyrEYrEUDIFkN43BE"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >

      <Provider store={store}>
        {/* <App /> */}
        {/* <Profile/> */}
        <UPI/>
      </Provider>
    </Auth0Provider>
  </BrowserRouter>

);
