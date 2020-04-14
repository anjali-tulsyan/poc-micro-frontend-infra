import React, { Component } from 'react';

class Lending extends React.Component {
  componentDidMount() {
     
    const existingScript = document.getElementById('script-lending');

    if (existingScript) {
      this.renderMicroFrontend();
      return;
    }

    const script = document.createElement('script');
	     script.src = 'http://localhost:3001/main.js';
	     script.id = 'script-lending';
	     script.onload = this.renderMicroFrontend;
	     document.body.appendChild(script);
  }

  componentWillUnmount() {
    
    window.unmountLending("lending");
  }

  renderMicroFrontend() {
     
    window.renderLending("lending");
  };

  render() {
    return <main id="lending" />;
  }
}
 

export default Lending;