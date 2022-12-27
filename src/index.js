import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer from './utils/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <StateProvider initialState={initialState} reducer={reducer}>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>
  );

