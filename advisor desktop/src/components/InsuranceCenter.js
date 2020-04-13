import React, { Component } from 'react';

const InsuranceCenter = () => {

	 const existingScript = document.getElementById('insuranceCenter');

	 if (!existingScript) {
	     const script = document.createElement('script');
	     script.src = 'http://localhost:3000/main.js';
	     script.id = 'insuranceCenter';
	     document.body.appendChild(script);

	     script.onload = () => {
	       if (callback) callback();
	     };
	   }

	 return (
	 		<insurance-center > </insurance-center>
	 	)
};

export default InsuranceCenter;

/// const highOrderFunction = (fn, scriptId, path) => {
// 	const existingScript = document.getElementById(scriptId);

// 	 if (!existingScript) {
// 	     const script = document.createElement('script');
// 	     script.src = path;
// 	     script.id = 'insuranceCenter';
// 	     document.body.appendChild(script);

// 	     script.onload = () => {
// 	       if (callback) callback();
// 	     };
// 	   }

// 	return fn;
// } 

// export default highOrderFunction(InsuranceCenter, "insuranceCenter","http://localhost:3000/main.js");