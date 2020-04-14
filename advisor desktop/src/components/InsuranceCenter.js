import React, { Component } from 'react';


class InsuranceCenter extends React.Component {
  componentDidMount() {
     
    const existingScript = document.getElementById('script-insurance-center');

    if (existingScript) {
      this.renderMicroFrontend();
      return;
    }

    const script = document.createElement('script');
	     script.src = 'http://localhost:3000/main.js';
	     script.id = 'script-insurance-center';
	     script.onload = this.renderMicroFrontend;
	     document.body.appendChild(script);
  }

  componentWillUnmount() {
    
    window.unmountInsuranceCenter("insurance-center");
  }

  renderMicroFrontend() {
     
    window.renderInsuranceCenter("insurance-center");
  };

  render() {
    return <main id="insurance-center" />;
  }
}
 

export default InsuranceCenter;