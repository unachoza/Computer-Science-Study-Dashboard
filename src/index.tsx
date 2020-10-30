import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Form from './Components/Form/ProgressInput';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
