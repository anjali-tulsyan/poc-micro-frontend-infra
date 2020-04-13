import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Default = () => {


	return (
		<ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        	<Link to="/reduxExample"> <Button>Redux Example </Button>  </Link>
        	<Link to="/apolloExample"> <Button>Appolo Example </Button>  </Link>
      	</ButtonGroup>

	)
}

export default Default;