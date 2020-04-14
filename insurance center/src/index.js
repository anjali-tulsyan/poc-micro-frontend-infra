import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderInsuranceCenter = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountInsuranceCenter = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
