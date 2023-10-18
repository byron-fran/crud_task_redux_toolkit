import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'
import App from './App'
import store from './redux/store'
const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Provider store={store}>
    <App  />
    </Provider>

  </StrictMode>
);
