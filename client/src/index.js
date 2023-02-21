import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store';
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
      <Auth0Provider
      domain="dev-fdj8ufvcgxkhe6qd.us.auth0.com"
      clientId="IG1zcNX6o8n3QOKfYikh8xyZElIBOMrR"
      redirectUri={window.location.origin}
      >
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Auth0Provider>
     </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

