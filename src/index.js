import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(

  <Auth0Provider
    domain="dev-vb8vd6gs52h6qg7j.us.auth0.com"
    clientId="BjiH1gTDlpcQMo8JyrEYrEUDIFkN43BE"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>

);


reportWebVitals();
