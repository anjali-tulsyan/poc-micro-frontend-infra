import React, { Component } from 'react';

const Lending = () => {

	const existingScript = document.getElementById('lending');

	if (!existingScript) {
	     const script = document.createElement('script');
	     script.src = 'http://localhost:3001/main.js';
	     script.id = 'lending';
	     document.body.appendChild(script);

	     script.onload = () => {
	       if (callback) callback();
	     };
    }


	 return (
	 		<lending-ayco> </lending-ayco>
	 	)
};

export default Lending;