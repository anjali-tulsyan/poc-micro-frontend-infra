import React, { Component } from 'react';
import Parcel from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';

const loadReactAppInsuranceCenter = () => System.import('insuranceCenter');


const InsuranceCenter = () => {

	 return (
	 		<Parcel
                  config={loadReactAppInsuranceCenter}
                  mountParcel={mountRootParcel}
                />
	 	)
};

export default InsuranceCenter;
