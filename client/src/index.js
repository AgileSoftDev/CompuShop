import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store';
import { Auth0Provider } from "@auth0/auth0-react"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
        <PayPalScriptProvider options={{ "client-id": "Aa9SaYMRYI92HMqajFUqG9WSm1CVI3s4nOoyT-F58UXV0WRJQBNeJgVpRe46xfXepr430pElNvgcvj2Q" }}>
      <Auth0Provider
      domain="dev-4x4kckwt6fai1h5p.us.auth0.com"
      clientId="rzpzLVsAkrjHjO1qZIuWL7v6hydBMM2P"
      redirectUri={window.location.origin}
      >
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Auth0Provider>
       </PayPalScriptProvider>
     </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

