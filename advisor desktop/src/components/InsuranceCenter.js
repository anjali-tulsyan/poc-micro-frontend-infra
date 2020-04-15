import React, { Component } from 'react';
import Parcel from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';

const loadReactAppInsuranceCenter = async () => {
    await runScript1('http://localhost:3000/main.js', "script-insurance-center");
    return window.insuranceCenter;
};


const runScript1 = async (url, id) => {
    return new Promise((resolve, reject) => {
         
	    const script = document.createElement('script');
	     const exisingScript = document.getElementById(id);
	     if (!exisingScript) {
		     script.src = url;
		     script.id = id;
			 script.onload = resolve;
			 script.onerror = reject;

		  const firstScript = document.getElementsByTagName('script')[0];
		  firstScript.parentNode.insertBefore(script, firstScript);
		  
	  	}

    });
};

const InsuranceCenter = () => {

	 return (
	 		<Parcel
                  config={loadReactAppInsuranceCenter}
                  mountParcel={mountRootParcel}
                />
	 	)
};

export default InsuranceCenter;
