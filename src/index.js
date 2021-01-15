import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

const APP_NAME = process.env.REACT_APP_NAME;
const render = `render${APP_NAME}`;
const unmount = `unmount${APP_NAME}`;
const isDevelopment = !document.getElementById(`${APP_NAME}-container`);

window[render] = (containerId) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};

window[unmount] = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (isDevelopment) {
  window[render]('root');
}
