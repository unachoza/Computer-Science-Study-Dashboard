import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Components/Form/ContactUs';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
