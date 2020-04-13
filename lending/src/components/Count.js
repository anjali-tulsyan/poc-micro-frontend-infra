import React from 'react';
import { connect } from 'react-redux';
import {increase, decrease} from '../redux/actions';
import { Button, ButtonGroup } from '@material-ui/core';


const Count = ({ count, increaseCoutner, decreaseCounter }) => {

  return (
	  <div>
	    <p> {count.counter} </p>
	   
	    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        	<Button onClick={() => {increaseCoutner()}}> +  </Button>  
        	<Button onClick={() => {decreaseCounter()}}> - </Button>  
      	</ButtonGroup>
	  </div>
	)
}


const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  increaseCoutner: () => dispatch(increase()),
  decreaseCounter: () => dispatch(decrease())
})

export default connect(mapStateToProps, mapDispatchToProps)(Count);