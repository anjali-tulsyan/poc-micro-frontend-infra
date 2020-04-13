import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Default = () => {

	return (
		<ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        	<Link to="/insuranceCenter"> <Button>Insurance Center</Button>  </Link>
        	<Link to="/lending"> <Button>Lending</Button>  </Link>
        	<Link to="/dashboard"> <Button>Dashboard</Button>  </Link>
      	</ButtonGroup>

	)
}

export default Default;