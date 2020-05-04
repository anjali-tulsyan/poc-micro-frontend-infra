import React, { Component } from 'react';
import Parcel from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';


const loadReactAppLending = () => {
    return System.import('lending')
    
};


const runScript = async (url, id) => {
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
		  
	  	} else {
	  		resolve();
	  	}

    });
};




const Lending = () => {

	 return (
	 		<Parcel
                  config={loadReactAppLending}
                  mountParcel={mountRootParcel}
                />
	 	)
};

export default Lending;