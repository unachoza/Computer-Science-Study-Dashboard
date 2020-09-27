import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactUsForm from './Components/Form/ContactUs';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ContactUsForm />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
