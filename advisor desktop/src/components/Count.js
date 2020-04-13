import React from 'react';
import { connect } from 'react-redux';
import {increase, decrease} from '../redux/actions';

const Count = ({ count, increaseCoutner, decreaseCounter }) => (
	//debugger;
  <div>
    <p> {count.counter} </p>
    <button onClick={() => {increaseCoutner()}}> + </button> 
    <button onClick={() => {decreaseCounter()}}> - </button>
  </div>
)


const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  increaseCoutner: () => dispatch(increase()),
  decreaseCounter: () => dispatch(decrease())
})

export default connect(mapStateToProps, mapDispatchToProps)(Count);