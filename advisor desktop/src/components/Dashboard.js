import React from 'react';
import Lending from './Lending';
import InsuranceCenter from './InsuranceCenter';

const Dashboard = () => {



	return (
		<div className="dashboard">
			<InsuranceCenter />
			<Lending />
		</div>
	)
}

export default Dashboard;