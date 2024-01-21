import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Auth0Provider
    domain="dev-stoffn42geherqo0.us.auth0.com"
    clientId="vpNTvB8G3HEOGmiFz0R1PjfVMTbA7tHj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation="localstorage"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
)
