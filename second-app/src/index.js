import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

ReactDOM.render(
  <App headerTitle="NAV"
    contentTitle="Today"
    contentBody={(new Date()).toString()}
  />,
  document.getElementById('root')
);
